import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconthHeaderComponent } from './econth-header.component';

describe('EconthHeaderComponent', () => {
  let component: EconthHeaderComponent;
  let fixture: ComponentFixture<EconthHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconthHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
