import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleClearComponent } from './input-example-clear.component';

describe('InputExampleClearComponent', () => {
  let component: InputExampleClearComponent;
  let fixture: ComponentFixture<InputExampleClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputExampleClearComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputExampleClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
