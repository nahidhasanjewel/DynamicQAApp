import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTextEditorComponent } from './online-text-editor.component';

describe('OnlineTextEditorComponent', () => {
  let component: OnlineTextEditorComponent;
  let fixture: ComponentFixture<OnlineTextEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineTextEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
