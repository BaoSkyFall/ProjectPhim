import { Component, OnInit, ViewChild } from '@angular/core';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../../services/phim.service';

@Component({
  selector: 'app-trangdatve',
  templateUrl: './trangdatve.component.html',
  styleUrls: ['./trangdatve.component.css']
})
export class TrangdatveComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) dsGhe: DanhSachGheComponent;
  public DanhSachGhe: any;
  public DSGheDatVe:any;
  public maLichChieu:string;
  constructor(private activated: ActivatedRoute, private phimSV: PhimService) { }
  // themGheCha() {
  //   let gheAdd = {
  //     TenGhe: 'ghế 36',
  //     SoGhe: '36',
  //     Gia: '80000',
  //     TrangThai: false
  //   }
  //   this.dsGhe.ThemGheCon(gheAdd);
  // }
  LayDanhSachGheDuocChon(value)
  {
   this.DSGheDatVe=value;
   console.log(this.DSGheDatVe);
  }
  DatVe()
  {
    this.phimSV.DatVe(this.maLichChieu,this.DSGheDatVe).subscribe(
      (kq:any)=>
      {
        console.log(kq);
      }
    )
  }
  ngOnInit() {
    this.activated.params.subscribe(
      (kq: any) => {
        console.log(kq);
        this.maLichChieu=kq.malichchieu;
        this.phimSV.LayChiTietPhongVe(kq.malichchieu).subscribe(
          (kq: any) => {
            this.DanhSachGhe = kq.DanhSachGhe;
            this.dsGhe.mangGheNgoi=this.DanhSachGhe;
            console.log(this.dsGhe.mangGheNgoi);
          }
        )
      }
    )
  }

}
