import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../../services/phim.service';
import { NguoiDungService } from '../../../services/nguoi-dung.service';

@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent implements OnInit {
  public SL_Phim:any;
  public SL_ND:any;
  constructor(private phimSV:PhimService, private nguoiDungSV:NguoiDungService) { }

  ngOnInit() {
    this.phimSV.LayDanhSachPhim().subscribe(
      (kq:any)=>{
        this.SL_Phim=kq.length;
        this.nguoiDungSV.LayDanhSachNguoiDung("GP06").subscribe(
          (kq:any)=>{
            this.SL_ND=kq.length;
          }
        )
      }
    )
  }

}
