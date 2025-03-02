import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleBasicComponent } from './select-example-basic.component';

describe('SelectExampleBasicComponent', () => {
  let component: SelectExampleBasicComponent;
  let fixture: ComponentFixture<SelectExampleBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectExampleBasicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectExampleBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
