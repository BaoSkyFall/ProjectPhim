import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activated:ActivatedRoute) { }

  ngOnInit() {
  //Dùng Service để đồng bộ tên user
  }

}
