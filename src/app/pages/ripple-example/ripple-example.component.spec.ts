import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleExampleComponent } from './ripple-example.component';

describe('RippleExampleComponent', () => {
  let component: RippleExampleComponent;
  let fixture: ComponentFixture<RippleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RippleExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RippleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
