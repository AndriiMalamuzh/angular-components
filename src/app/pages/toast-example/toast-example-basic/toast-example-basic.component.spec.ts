import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastExampleBasicComponent } from './toast-example-basic.component';

describe('ToastExampleBasicComponent', () => {
  let component: ToastExampleBasicComponent;
  let fixture: ComponentFixture<ToastExampleBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastExampleBasicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastExampleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
