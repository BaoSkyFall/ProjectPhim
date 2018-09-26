import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../../../services/phim.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  DanhSachPhimDangChieu = [

  ]
  constructor(private phimSV: PhimService) { }

  ngOnInit() {
    this.phimSV.LayDanhSachPhim().subscribe(
      (kq: any) => {
          this.DanhSachPhimDangChieu = kq;
          
      },
      (sida: any) => {
          console.log(sida);
      }
  )
  }

}
