import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerExampleComponent } from './spinner-example.component';

describe('SpinnerExampleComponent', () => {
  let component: SpinnerExampleComponent;
  let fixture: ComponentFixture<SpinnerExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
