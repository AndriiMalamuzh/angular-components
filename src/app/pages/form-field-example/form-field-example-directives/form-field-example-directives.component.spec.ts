import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldExampleDirectivesComponent } from './form-field-example-directives.component';

describe('FormFieldExampleDirectivesComponent', () => {
  let component: FormFieldExampleDirectivesComponent;
  let fixture: ComponentFixture<FormFieldExampleDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldExampleDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldExampleDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
