import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreContactFieldsComponent } from './more-contact-fields.component';

describe('MoreContactFieldsComponent', () => {
  let component: MoreContactFieldsComponent;
  let fixture: ComponentFixture<MoreContactFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreContactFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreContactFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
