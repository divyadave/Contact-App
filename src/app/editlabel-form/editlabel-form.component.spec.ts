import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlabelFormComponent } from './editlabel-form.component';

describe('EditlabelFormComponent', () => {
  let component: EditlabelFormComponent;
  let fixture: ComponentFixture<EditlabelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlabelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlabelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
