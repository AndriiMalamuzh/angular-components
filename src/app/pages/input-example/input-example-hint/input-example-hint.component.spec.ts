import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleHintComponent } from './input-example-hint.component';

describe('InputExampleHintComponent', () => {
  let component: InputExampleHintComponent;
  let fixture: ComponentFixture<InputExampleHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputExampleHintComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputExampleHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
