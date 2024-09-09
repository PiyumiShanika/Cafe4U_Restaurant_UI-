import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageruserComponent } from './manageruser.component';

describe('ManageruserComponent', () => {
  let component: ManageruserComponent;
  let fixture: ComponentFixture<ManageruserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageruserComponent]
    });
    fixture = TestBed.createComponent(ManageruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
