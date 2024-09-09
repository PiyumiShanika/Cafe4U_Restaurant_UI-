import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemadminComponent } from './menu-itemadmin.component';

describe('MenuItemadminComponent', () => {
  let component: MenuItemadminComponent;
  let fixture: ComponentFixture<MenuItemadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuItemadminComponent]
    });
    fixture = TestBed.createComponent(MenuItemadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
