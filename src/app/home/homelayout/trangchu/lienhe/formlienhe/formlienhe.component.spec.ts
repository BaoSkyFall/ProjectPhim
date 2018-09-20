import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlienheComponent } from './formlienhe.component';

describe('FormlienheComponent', () => {
  let component: FormlienheComponent;
  let fixture: ComponentFixture<FormlienheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlienheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
