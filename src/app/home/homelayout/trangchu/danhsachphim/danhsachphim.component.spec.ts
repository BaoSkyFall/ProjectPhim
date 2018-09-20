import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachphimComponent } from './danhsachphim.component';

describe('DanhsachphimComponent', () => {
  let component: DanhsachphimComponent;
  let fixture: ComponentFixture<DanhsachphimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhsachphimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
