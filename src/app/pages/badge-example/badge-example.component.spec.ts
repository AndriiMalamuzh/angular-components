import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeExampleComponent } from './badge-example.component';

describe('BadgeExampleComponent', () => {
  let component: BadgeExampleComponent;
  let fixture: ComponentFixture<BadgeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
