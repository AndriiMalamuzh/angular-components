import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleSearchComponent } from './select-example-search.component';

describe('SelectExampleSearchComponent', () => {
  let component: SelectExampleSearchComponent;
  let fixture: ComponentFixture<SelectExampleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectExampleSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectExampleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
