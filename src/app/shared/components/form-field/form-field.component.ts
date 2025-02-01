import { AfterViewInit, Component, contentChild, signal } from '@angular/core';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { NgControl } from '@angular/forms';
import { FormFieldErrorComponent } from 'src/app/shared/components/form-field-error/form-field-error.component';

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent implements AfterViewInit {
  inputDirective = contentChild(InputDirective);
  ngControl = contentChild(NgControl);
  errorComponent = contentChild(FormFieldErrorComponent);

  inputId = signal<string>(`input-${crypto.randomUUID()}`);
  isFocused = signal(false);
  isHasValue = signal(false);
  isDisabled = signal(false);
  isRequired = signal(false);

  ngAfterViewInit(): void {
    setTimeout(() => {
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
    });
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
