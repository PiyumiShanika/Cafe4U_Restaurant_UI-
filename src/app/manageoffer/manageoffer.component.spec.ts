import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageofferComponent } from './manageoffer.component';

describe('ManageofferComponent', () => {
  let component: ManageofferComponent;
  let fixture: ComponentFixture<ManageofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageofferComponent]
    });
    fixture = TestBed.createComponent(ManageofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
