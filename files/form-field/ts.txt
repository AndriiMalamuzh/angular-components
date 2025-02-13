import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { NgControl } from '@angular/forms';
import { FormFieldErrorComponent } from 'src/app/shared/components/form-field/form-field-error/form-field-error.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field/form-field-label/form-field-label.component';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent implements AfterViewInit, OnChanges {
  inputDirective = contentChild(InputDirective);
  ngControl = contentChild(NgControl);
  errorComponent = contentChild(FormFieldErrorComponent);
  labelComponent = contentChild(FormFieldLabelComponent);

  inputId = signal<string>(`input-${crypto.randomUUID()}`);
  isFocused = signal(false);
  isHasValue = signal(false);
  isDisabled = signal(false);
  isRequired = signal(false);
  isTextarea = computed(() => {
    return (
      this.inputDirective()?.el?.nativeElement?.tagName?.toLowerCase() ===
      'textarea'
    );
  });

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateValues();
    });

    if (this.ngControl()?.control) {
      this.ngControl().control.valueChanges?.subscribe(value => {
        this.isHasValue.set(!!value);
      });
      this.isHasValue.set(!!this.ngControl().control.value);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ngControl']) {
      this.updateValues();
    }
  }

  updateValues(): void {
    if (this.inputDirective()) {
      this.inputDirective().setId(this.inputId());
      this.isHasValue.set(this.inputDirective().getValue().length > 0);
      this.isDisabled.set(this.inputDirective().isDisabled());
      this.isRequired.set(this.inputDirective().isRequired());
      this.inputDirective().onFocus(() => this.isFocused.set(true));
      this.inputDirective().onBlur(() => this.isFocused.set(false));
      this.inputDirective().onInput((value: string) =>
        this.isHasValue.set(value.length > 0)
      );
    }
    if (this.ngControl()?.control) {
      this.isHasValue.set(!!this.ngControl().control.value);
    }
  }

  onFormFieldClick(): void {
    if (this.inputDirective() && !this.isDisabled()) {
      this.inputDirective()?.focus();
    }
  }

  get controlClasses(): string {
    if (!this.ngControl() || !this.ngControl().control) return '';

    return [
      this.ngControl().control.touched ? 'ng-touched' : 'ng-untouched',
      this.ngControl().control.dirty ? 'ng-dirty' : 'ng-pristine',
      this.ngControl().control.invalid ? 'ng-invalid' : 'ng-valid',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
