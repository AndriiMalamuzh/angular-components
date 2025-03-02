import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerExampleBasicComponent } from './spinner-example-basic.component';

describe('SpinnerExampleBasicComponent', () => {
  let component: SpinnerExampleBasicComponent;
  let fixture: ComponentFixture<SpinnerExampleBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerExampleBasicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerExampleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
