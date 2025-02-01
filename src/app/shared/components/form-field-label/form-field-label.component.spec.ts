import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldLabelComponent } from './form-field-label.component';

describe('FormFieldLabelComponent', () => {
  let component: FormFieldLabelComponent;
  let fixture: ComponentFixture<FormFieldLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
