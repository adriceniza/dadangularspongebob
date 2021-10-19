import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandisingPreviewComponent } from './merchandising-preview.component';

describe('MerchandisingPreviewComponent', () => {
  let component: MerchandisingPreviewComponent;
  let fixture: ComponentFixture<MerchandisingPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandisingPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandisingPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
