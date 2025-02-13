import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleTextareaComponent } from './input-example-textarea.component';

describe('InputExampleTextareaComponent', () => {
  let component: InputExampleTextareaComponent;
  let fixture: ComponentFixture<InputExampleTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputExampleTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputExampleTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
