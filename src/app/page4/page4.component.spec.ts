import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page4Component } from './page4.component';

describe('Page4Component', () => {
  let component: Page4Component;
  let fixture: ComponentFixture<Page4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
