import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuOpenButtonComponent } from './mobile-menu-open-button.component';

describe('MobileMenuOpenButtonComponent', () => {
  let component: MobileMenuOpenButtonComponent;
  let fixture: ComponentFixture<MobileMenuOpenButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileMenuOpenButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuOpenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
