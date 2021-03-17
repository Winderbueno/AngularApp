import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgHomeComponent } from '../app-ng-home/app-ng-home.component';

describe('AppNgHomeComponent', () => {
  let component: AppNgHomeComponent;
  let fixture: ComponentFixture<AppNgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNgHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
