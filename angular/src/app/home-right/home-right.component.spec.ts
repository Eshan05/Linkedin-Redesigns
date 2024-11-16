import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRightComponent } from './home-right.component';

describe('HomeRightComponent', () => {
  let component: HomeRightComponent;
  let fixture: ComponentFixture<HomeRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
