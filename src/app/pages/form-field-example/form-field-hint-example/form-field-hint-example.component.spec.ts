import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldHintExampleComponent } from './form-field-hint-example.component';

describe('FormFieldHintExampleComponent', () => {
  let component: FormFieldHintExampleComponent;
  let fixture: ComponentFixture<FormFieldHintExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldHintExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldHintExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
