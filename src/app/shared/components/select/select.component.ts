import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  Injector,
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
  host: {
    '(keydown)': 'onKeydown($event)',
    '(focus)': 'hasFocus.set(true)',
    '(blur)': 'hasFocus.set(false)',
    role: 'combobox',
    '[attr.aria-expanded]': 'isOpen()',
    'aria-haspopup': 'listbox',
    '[attr.aria-controls]': 'listboxId',
    '[attr.aria-activedescendant]':
      'focusedIndex() >= 0 ? listboxId + "-opt-" + focusedIndex() : null',
    '[attr.aria-multiselectable]': 'multiple()',
    tabindex: '0',
  },
})
export class SelectComponent implements ControlValueAccessor {
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly renderer = inject(Renderer2);
  private readonly formFieldComponent = inject(FormFieldComponent);
  private readonly injector = inject(Injector);

  readonly optionsTemplate = viewChild<TemplateRef<void>>('optionsTemplate');
  readonly options = contentChildren(OptionComponent);

  readonly multiple = input<boolean>(false);
  readonly disabled = input<boolean>(false);
  readonly required = input<boolean>(false);

  readonly selectChange = output<string[] | string>();

  readonly selectedValues = signal<string[] | string>('');
  readonly selectedDisplayTexts = signal<string[]>([]);
  readonly isOpen = signal<boolean>(false);
  readonly hasFocus = signal(false);
  readonly focusedIndex = signal<number>(-1);
  readonly listboxId = `select-listbox-${crypto.randomUUID()}`;
  readonly firstSelectedIndex = computed(() => {
    const opts = this.options();
    const vals = this.selectedValues();
    const idx = opts.findIndex(o =>
      Array.isArray(vals) ? vals.includes(o.value() ?? '') : o.value() === vals
    );
    return idx === -1 ? 0 : idx;
  });

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
      if (
        (this.selectedValues() as string[]).includes(option.value() as string)
      ) {
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
        this.selectedValues.update(v => [
          ...(v as string[]),
          option.value() as string,
        ]);
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
      this.clearAllFocus();
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

    this.options().forEach((opt, i) => {
      this.renderer.setAttribute(
        opt.el.nativeElement,
        'id',
        `${this.listboxId}-opt-${i}`
      );
    });
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
        !this.selectedDisplayTexts().includes(
          option.el.nativeElement.innerText.trim()
        )
      ) {
        this.selectedDisplayTexts.update(v => [
          ...v,
          option.el.nativeElement.innerText.trim(),
        ]);
      }
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;

    switch (event.key) {
      case 'Escape':
        if (this.isOpen()) {
          event.preventDefault();
          this.isOpen.set(false);
          this.clearAllFocus();
          this.closeDropdown();
          this.onTouched();
        }
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen()) {
          this.isOpen.set(true);
          this.openDropdown();
          afterNextRender(() => this.moveFocus(1), { injector: this.injector });
        } else {
          this.moveFocus(1);
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (!this.isOpen()) {
          this.isOpen.set(true);
          this.openDropdown();
          afterNextRender(() => this.moveFocus(-1), {
            injector: this.injector,
          });
        } else {
          this.moveFocus(-1);
        }
        break;

      case 'Enter':
      case ' ':
        event.preventDefault();
        event.stopPropagation();
        if (!this.isOpen()) {
          this.isOpen.set(true);
          this.openDropdown();
          afterNextRender(
            () => this.setFocusedIndex(this.firstSelectedIndex()),
            {
              injector: this.injector,
            }
          );
        } else if (this.focusedIndex() >= 0) {
          this.selectOption(this.options()[this.focusedIndex()]);
        }
        break;

      case 'Tab':
        if (this.isOpen()) {
          this.isOpen.set(false);
          this.clearAllFocus();
          this.closeDropdown();
          this.onTouched();
        }
        break;
    }
  }

  onOverlayClick(): void {
    this.isOpen.set(false);
    this.clearAllFocus();
    this.closeDropdown();
    this.onTouched();
  }

  private moveFocus(delta: 1 | -1): void {
    const count = this.options().length;
    if (count === 0) return;
    const current = this.focusedIndex();
    const next =
      current === -1
        ? delta === 1
          ? 0
          : count - 1
        : (current + delta + count) % count;
    this.setFocusedIndex(next);
  }

  private setFocusedIndex(index: number): void {
    const opts = this.options();
    const prev = this.focusedIndex();
    if (prev >= 0 && prev < opts.length) opts[prev].isFocused.set(false);
    this.focusedIndex.set(index);
    if (index >= 0 && index < opts.length) {
      opts[index].isFocused.set(true);
      opts[index].scrollIntoView();
    }
  }

  private clearAllFocus(): void {
    this.options().forEach(o => o.isFocused.set(false));
    this.focusedIndex.set(-1);
  }

  registerOnChange(fn: (value: string | string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
