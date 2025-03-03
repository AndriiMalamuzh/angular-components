import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastExampleCodeComponent } from './toast-example-code.component';

describe('ToastExampleCodeComponent', () => {
  let component: ToastExampleCodeComponent;
  let fixture: ComponentFixture<ToastExampleCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastExampleCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastExampleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
