import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeThumbnailComponent } from './episode-thumbnail.component';

describe('EpisodeThumbnailComponent', () => {
  let component: EpisodeThumbnailComponent;
  let fixture: ComponentFixture<EpisodeThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
