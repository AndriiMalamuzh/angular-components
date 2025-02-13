import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleDirectiveComponent } from './input-example-directive.component';

describe('InputExampleDirectiveComponent', () => {
  let component: InputExampleDirectiveComponent;
  let fixture: ComponentFixture<InputExampleDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputExampleDirectiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputExampleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
