import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phim-item',
  templateUrl: './phim-item.component.html',
  styleUrls: ['./phim-item.component.css']
})
export class PhimItemComponent implements OnInit {
  @Input() itemPhim:any;
  constructor() { }

  ngOnInit() {
  }

}
