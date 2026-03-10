import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  output,
  Renderer2,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { OptionComponent } from 'src/app/shared/components/select/option/option.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly renderer = inject(Renderer2);
  private readonly formFieldComponent = inject(FormFieldComponent);

  readonly optionsTemplate = viewChild<TemplateRef<void>>('optionsTemplate');
  readonly options = contentChildren(OptionComponent);

  readonly multiple = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly required = input<boolean>(false);

  readonly selectChange = output<string[] | string>();

  readonly selectedValues = signal<string[] | string>('');
  readonly selectedDisplayTexts = signal<string[]>([]);
  readonly isOpen = signal<boolean>(false);

  private onChange: (value: string[] | string) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    effect(() => {
      this.checkSelected();
    });
  }

  selectOption(option: OptionComponent): void {
    if (!option.value()) {
      this.selectedValues.set('');
      this.isOpen.set(false);
      this.closeDropdown();
      return;
    }

    if (this.multiple()) {
      if ((this.selectedValues() as string[]).includes(option.value() as string)) {
        this.selectedValues.set(
          (this.selectedValues() as string[]).filter(v => v !== option.value())
        );
        this.selectedDisplayTexts.set(
          this.selectedDisplayTexts().filter(
            t => t !== option.el.nativeElement.innerText.trim()
          )
        );
        option.isSelected.set(false);
      } else {
        this.selectedValues.update(v => [...(v as string[]), option.value() as string]);
        this.selectedDisplayTexts.update(v => [
          ...v,
          option.el.nativeElement.innerText.trim(),
        ]);
        option.isSelected.set(true);
      }
    } else {
      this.selectedValues.set(option.value() as string);
      this.selectedDisplayTexts.set([option.el.nativeElement.innerText.trim()]);
      this.options().forEach(opt => opt.isSelected.set(false));
      option.isSelected.set(true);
      this.isOpen.set(false);
      this.closeDropdown();
    }

    this.onChange(this.selectedValues());
    this.onTouched();
    this.selectChange.emit(this.selectedValues());
  }

  toggleDropdown(): void {
    this.isOpen.update(open => !open);
    if (this.isOpen()) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown(): void {
    const template = this.optionsTemplate();
    if (!template) return;

    const view = this.viewContainerRef.createEmbeddedView(template);
    const hostView = view.rootNodes[0];

    this.renderer.appendChild(document.body, hostView);

    const rect = this.formFieldComponent
      .formFieldElement()
      ?.nativeElement.getBoundingClientRect();

    if (!rect) return;

    const scrollTop = window.scrollY;
    const dropdownHeight = hostView.getBoundingClientRect().height;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    this.renderer.setStyle(hostView, 'position', 'absolute');
    this.renderer.setStyle(hostView, 'left', `${rect.left}px`);
    this.renderer.setStyle(hostView, 'width', `${rect.width}px`);

    if (spaceBelow >= dropdownHeight || spaceBelow >= spaceAbove) {
      this.renderer.setStyle(hostView, 'top', `${rect.bottom + scrollTop + 5}px`);
    } else {
      this.renderer.setStyle(
        hostView,
        'bottom',
        `${window.innerHeight - rect.top - scrollTop + 5}px`
      );
    }
  }

  closeDropdown(): void {
    this.viewContainerRef.clear();
  }

  writeValue(value: string | string[]): void {
    if (this.multiple()) {
      this.selectedValues.set(Array.isArray(value) ? value : []);
    } else {
      this.selectedValues.set(value ?? '');
      this.selectedDisplayTexts.set([]);
    }

    this.checkSelected();
  }

  checkSelected(): void {
    this.options().forEach(option => {
      const selected = (this.selectedValues() as string[]).includes(
        option.value() as string
      );
      option.isSelected.set(selected);

      if (
        selected &&
        !this.selectedDisplayTexts().includes(option.el.nativeElement.innerText.trim())
      ) {
        this.selectedDisplayTexts.update(v => [
          ...v,
          option.el.nativeElement.innerText.trim(),
        ]);
      }
    });
  }

  onOverlayClick(): void {
    this.isOpen.set(false);
    this.closeDropdown();
    this.onTouched();
  }

  registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
