import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerExampleCodeComponent } from './spinner-example-code.component';

describe('SpinnerExampleCodeComponent', () => {
  let component: SpinnerExampleCodeComponent;
  let fixture: ComponentFixture<SpinnerExampleCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerExampleCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpinnerExampleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
