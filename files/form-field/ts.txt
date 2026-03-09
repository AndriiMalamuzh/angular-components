import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { EMPTY, merge, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { NgControl } from '@angular/forms';
import { FormFieldErrorComponent } from 'src/app/shared/components/form-field/form-field-error/form-field-error.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field/form-field-label/form-field-label.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';

function isNonEmpty(v: unknown): boolean {
  if (v == null) return false;
  if (typeof v === 'string' || Array.isArray(v)) return v.length > 0;
  return true;
}

@Component({
  selector: 'app-form-field',
  imports: [],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  readonly formFieldElement = viewChild<ElementRef>('formFieldElement');
  readonly inputDirective = contentChild(InputDirective);
  readonly selectComponent = contentChild(SelectComponent);
  readonly errorComponent = contentChild(FormFieldErrorComponent);
  readonly labelComponent = contentChild(FormFieldLabelComponent);
  readonly ngControl = contentChild(NgControl);

  readonly inputId = signal<string>(`input-${crypto.randomUUID()}`);
  readonly isFocused = signal(false);
  readonly isHasValue = signal(false);
  readonly isDisabled = signal(false);
  readonly isRequired = signal(false);
  readonly isTextarea = computed(() => {
    return (
      this.inputDirective()?.el?.nativeElement?.tagName?.toLowerCase() ===
      'textarea'
    );
  });

  private readonly controlClasses$ = toObservable(this.ngControl).pipe(
    switchMap(ngControl => {
      const control = ngControl?.control;
      if (!control) return of('');
      return merge(of(null), control.events).pipe(
        map(() =>
          [
            control.touched ? 'ng-touched' : 'ng-untouched',
            control.dirty ? 'ng-dirty' : 'ng-pristine',
            control.invalid ? 'ng-invalid' : 'ng-valid',
          ].join(' ')
        )
      );
    })
  );
  readonly controlClasses = toSignal(this.controlClasses$, {
    initialValue: '',
  });

  private readonly controlValue = toSignal(
    toObservable(this.ngControl).pipe(
      switchMap(ngControl => {
        const control = ngControl?.control;
        if (!control) return EMPTY;
        return merge(of(control.value), control.valueChanges);
      })
    )
  );

  private readonly controlDisabled = toSignal(
    toObservable(this.ngControl).pipe(
      switchMap(ngControl => {
        const control = ngControl?.control;
        if (!control) return EMPTY;
        return merge(of(null), control.events).pipe(
          map(() => control.disabled)
        );
      })
    )
  );

  constructor() {
    afterNextRender(() => {
      this.updateValues();
    });

    effect(() => {
      if (this.selectComponent()) {
        this.isHasValue.set(
          isNonEmpty(this.selectComponent()?.selectedValues())
        );
      }
    });

    effect(() => {
      const v = this.controlValue();
      if (v !== undefined) this.isHasValue.set(isNonEmpty(v));
    });

    effect(() => {
      const disabled = this.controlDisabled();
      if (disabled !== undefined) this.isDisabled.set(disabled);
    });
  }

  updateValues(): void {
    if (this.inputDirective()) {
      this.inputDirective().setId(this.inputId());
      this.isDisabled.set(this.inputDirective().isDisabled());
      this.isRequired.set(this.inputDirective().isRequired());
      this.inputDirective().onFocus(() => this.isFocused.set(true));
      this.inputDirective().onBlur(() => this.isFocused.set(false));
      this.inputDirective().onInput((value: string) =>
        this.isHasValue.set(isNonEmpty(value))
      );
    } else if (this.selectComponent()) {
      this.isDisabled.set(this.selectComponent().disabled());
      this.isRequired.set(this.selectComponent().required());
    }
    if (this.ngControl()?.control) {
      this.isHasValue.set(isNonEmpty(this.ngControl().control?.value));
    }
  }

  onFormFieldClick(): void {
    if (this.inputDirective() && !this.isDisabled()) {
      this.inputDirective().focus();
    }
    if (this.selectComponent() && !this.isDisabled()) {
      this.selectComponent().toggleDropdown();
    }
  }
}
