import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBlogComponent } from './item-blog.component';

describe('ItemBlogComponent', () => {
  let component: ItemBlogComponent;
  let fixture: ComponentFixture<ItemBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
