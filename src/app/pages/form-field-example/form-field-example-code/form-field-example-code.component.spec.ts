import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldExampleCodeComponent } from './form-field-example-code.component';

describe('FormFieldExampleCodeComponent', () => {
  let component: FormFieldExampleCodeComponent;
  let fixture: ComponentFixture<FormFieldExampleCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldExampleCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldExampleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
