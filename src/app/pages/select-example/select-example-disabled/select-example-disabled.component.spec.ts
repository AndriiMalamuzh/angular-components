import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleDisabledComponent } from './select-example-disabled.component';

describe('SelectExampleDisabledComponent', () => {
  let component: SelectExampleDisabledComponent;
  let fixture: ComponentFixture<SelectExampleDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectExampleDisabledComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectExampleDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
