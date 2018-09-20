import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsachphim',
  templateUrl: './danhsachphim.component.html',
  styleUrls: ['./danhsachphim.component.css']
})
export class DanhsachphimComponent implements OnInit {
  loaiPhimSwitch:string = 'phimdangchieu';
  HienPhimDangChieu(){
    this.loaiPhimSwitch = 'phimdangchieu';
  }
  HienPhimSapChieu(){
    this.loaiPhimSwitch = 'phimsapchieu'
  }
  constructor() { }

  ngOnInit() {
  }

}
