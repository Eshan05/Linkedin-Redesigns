import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCenterComponent } from './home-center.component';

describe('HomeCenterComponent', () => {
  let component: HomeCenterComponent;
  let fixture: ComponentFixture<HomeCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
