import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarOverlayComponent } from './sidebar-overlay.component';

describe('SidebarOverlayComponent', () => {
  let component: SidebarOverlayComponent;
  let fixture: ComponentFixture<SidebarOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
