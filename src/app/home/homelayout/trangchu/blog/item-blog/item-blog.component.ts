import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-blog',
  templateUrl: './item-blog.component.html',
  styleUrls: ['./item-blog.component.css']
})
export class ItemBlogComponent implements OnInit {
  @Input() itemPhim:any;
  public trailerPhim:string;
  constructor() { }

  ngOnInit() {
    let mangTrailer =this.itemPhim.Trailer.split('watch?v=');
    this.trailerPhim=`${mangTrailer[0]}embed/${mangTrailer[1]}`;
  }

}
