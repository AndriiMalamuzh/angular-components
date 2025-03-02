import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleCodeComponent } from './select-example-code.component';

describe('SelectExampleCodeComponent', () => {
  let component: SelectExampleCodeComponent;
  let fixture: ComponentFixture<SelectExampleCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectExampleCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectExampleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
