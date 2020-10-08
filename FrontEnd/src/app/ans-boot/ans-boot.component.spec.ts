import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsBootComponent } from './ans-boot.component';

describe('AnsBootComponent', () => {
  let component: AnsBootComponent;
  let fixture: ComponentFixture<AnsBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
