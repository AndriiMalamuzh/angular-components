import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleMultiplyComponent } from './select-example-multiply.component';

describe('SelectExampleMultiplyComponent', () => {
  let component: SelectExampleMultiplyComponent;
  let fixture: ComponentFixture<SelectExampleMultiplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectExampleMultiplyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectExampleMultiplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
