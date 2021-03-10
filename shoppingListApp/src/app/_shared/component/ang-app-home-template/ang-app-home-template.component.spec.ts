import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngAppHomeTemplateComponent } from './ang-app-home-template.component';

describe('AngAppHomeTemplateComponent', () => {
  let component: AngAppHomeTemplateComponent;
  let fixture: ComponentFixture<AngAppHomeTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngAppHomeTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngAppHomeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
