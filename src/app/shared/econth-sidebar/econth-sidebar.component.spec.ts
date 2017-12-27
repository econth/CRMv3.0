import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconthSidebarComponent } from './econth-sidebar.component';

describe('EconthSidebarComponent', () => {
  let component: EconthSidebarComponent;
  let fixture: ComponentFixture<EconthSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconthSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconthSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
