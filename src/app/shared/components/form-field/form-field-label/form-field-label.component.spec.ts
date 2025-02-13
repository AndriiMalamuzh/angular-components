import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldLabelComponent } from 'src/app/shared/components/form-field/form-field-label/form-field-label.component';

describe('FormFieldLabelComponent', () => {
  let component: FormFieldLabelComponent;
  let fixture: ComponentFixture<FormFieldLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
