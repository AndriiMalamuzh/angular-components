import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputExampleErrorComponent } from './input-example-error.component';

describe('InputExampleErrorComponent', () => {
  let component: InputExampleErrorComponent;
  let fixture: ComponentFixture<InputExampleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputExampleErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputExampleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
