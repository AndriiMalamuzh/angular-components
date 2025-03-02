import {
  Component,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  output,
  Renderer2,
  signal,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { OptionComponent } from 'src/app/shared/components/select/option/option.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
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
  private viewContainerRef = inject(ViewContainerRef);
  private renderer = inject(Renderer2);
  private formFieldComponent = inject(FormFieldComponent);

  optionsTemplate = viewChild<any>('optionsTemplate');
  options = contentChildren(OptionComponent);

  multiple = input<boolean>(false);
  disabled = input<boolean>(false);
  required = input<boolean>(false);

  selectChange = output<string[] | string>();

  selectedValues = signal<string[] | string>('');
  selectedDisplayTexts = signal<string[]>([]);
  isOpen = signal<boolean>(false);

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  constructor() {
    effect(() => {
      this.checkSelected();
    });
  }

  selectOption(option: OptionComponent) {
    if (!option.value()) {
      this.selectedValues.set('');
      this.isOpen.set(false);
      this.closeDropdown();
      return;
    }
    if (this.multiple()) {
      if (this.selectedValues().includes(option.value() as string)) {
        this.selectedValues.set(
          (this.selectedValues() as string[]).filter(
            value => value !== option.value()
          )
        );
        this.selectedDisplayTexts.set(
          (this.selectedDisplayTexts() as string[]).filter(
            text => text !== option.el.nativeElement.innerText.trim()
          )
        );
        option.isSelected.set(false);
      } else {
        this.selectedValues.update(value => [
          ...value,
          option.value() as string,
        ]);
        this.selectedDisplayTexts.update(value => [
          ...value,
          option.el.nativeElement.innerText.trim(),
        ]);
        option.isSelected.set(true);
      }
    } else {
      this.selectedValues.set(option.value() as string);
      this.selectedDisplayTexts.set([option.el.nativeElement.innerText.trim()]);
      this.isOpen.set(false);
      this.closeDropdown();
      this.options().forEach(opt => opt.isSelected.set(false));
      option.isSelected.set(true);
    }
    if (this.onChange) {
      this.onChange(this.selectedValues());
    }
    if (this.onTouched) {
      this.onTouched();
    }

    this.selectChange.emit(this.selectedValues());
  }

  toggleDropdown() {
    this.isOpen.update(res => !res);
    if (this.isOpen()) {
      this.openDropdown();
    } else {
      this.closeDropdown();
    }
  }

  openDropdown(): void {
    const view = this.viewContainerRef.createEmbeddedView(
      this.optionsTemplate()
    );
    const hostView = view.rootNodes[0];

    this.renderer.appendChild(document.body, hostView);

    const rect = this.formFieldComponent
      .formFieldElement()
      ?.nativeElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const dropdownHeight = hostView.getBoundingClientRect().height;
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    this.renderer.setStyle(hostView, 'position', 'absolute');
    this.renderer.setStyle(hostView, 'left', `${rect.left}px`);
    this.renderer.setStyle(hostView, 'width', `${rect.width}px`);

    if (spaceBelow >= dropdownHeight || spaceBelow >= spaceAbove) {
      this.renderer.setStyle(
        hostView,
        'top',
        `${rect.bottom + scrollTop + 5}px`
      );
    } else {
      this.renderer.setStyle(
        hostView,
        'bottom',
        `${window.innerHeight - rect.top - scrollTop + 5}px`
      );
    }
  }

  closeDropdown() {
    this.viewContainerRef.clear();
  }

  writeValue(value: string): void {
    if (this.multiple()) {
      this.selectedValues.set(Array.isArray(value) ? value : []);
    } else {
      this.selectedValues.set(value ?? '');
      this.selectedDisplayTexts.set([]);
    }

    this.checkSelected();
  }

  checkSelected(): void {
    if (this.options()) {
      this.options().forEach(option => {
        if (this.selectedValues().includes(option.value() as string)) {
          option.isSelected.set(true);
          if (
            !this.selectedDisplayTexts().includes(
              option.el.nativeElement.innerText.trim()
            )
          ) {
            this.selectedDisplayTexts.update(value => [
              ...value,
              option.el.nativeElement.innerText.trim(),
            ]);
          }
        } else {
          option.isSelected.set(false);
        }
      });
    }
  }

  onOverlayClick(): void {
    this.isOpen.set(false);
    this.closeDropdown();
    this.onTouched();
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
