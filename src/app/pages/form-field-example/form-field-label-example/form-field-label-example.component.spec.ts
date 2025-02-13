import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldLabelExampleComponent } from './form-field-label-example.component';

describe('FormFieldLabelExampleComponent', () => {
  let component: FormFieldLabelExampleComponent;
  let fixture: ComponentFixture<FormFieldLabelExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldLabelExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldLabelExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
