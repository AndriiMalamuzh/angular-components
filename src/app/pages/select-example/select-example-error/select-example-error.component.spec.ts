import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleErrorComponent } from './select-example-error.component';

describe('SelectExampleErrorComponent', () => {
  let component: SelectExampleErrorComponent;
  let fixture: ComponentFixture<SelectExampleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectExampleErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectExampleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
