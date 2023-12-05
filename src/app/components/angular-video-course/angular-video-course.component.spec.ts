import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVideoCourseComponent } from './angular-video-course.component';

describe('AngularVideoCourseComponent', () => {
  let component: AngularVideoCourseComponent;
  let fixture: ComponentFixture<AngularVideoCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularVideoCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularVideoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
