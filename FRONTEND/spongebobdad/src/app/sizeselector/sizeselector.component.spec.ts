import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeselectorComponent } from './sizeselector.component';

describe('SizeselectorComponent', () => {
  let component: SizeselectorComponent;
  let fixture: ComponentFixture<SizeselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeselectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
