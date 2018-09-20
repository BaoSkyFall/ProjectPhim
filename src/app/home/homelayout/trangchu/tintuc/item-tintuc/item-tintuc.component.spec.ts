import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTintucComponent } from './item-tintuc.component';

describe('ItemTintucComponent', () => {
  let component: ItemTintucComponent;
  let fixture: ComponentFixture<ItemTintucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTintucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
