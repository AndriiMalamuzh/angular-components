import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldHintComponent } from 'src/app/shared/components/form-field/form-field-hint/form-field-hint.component';

describe('FormFieldHintComponent', () => {
  let component: FormFieldHintComponent;
  let fixture: ComponentFixture<FormFieldHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldHintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
