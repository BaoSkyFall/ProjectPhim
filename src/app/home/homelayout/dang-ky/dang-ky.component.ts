import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from '../../../services/nguoi-dung.service';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {
  @ViewChild('formDangKy') formDK:NgForm;
  public Vl_Nhom:string ="GP01";
  public DanhSachNhom:string[]= [
    "GP01","GP02","GP03","GP04","GP05","GP06","GP07","GP08","GP09","GP10",
  ]
  public today = new Date();
  public mangNguoiDung:any[] = [];
  //Inject Service vào hàm khởi tạo
  constructor(private nguoiDungSV:NguoiDungService){

  }
  DangKy(value){
    // console.log(value);
    // this.formDK.reset();
    // this.mangNguoiDung.push(value);
    this.nguoiDungSV.ThemNguoiDung(value).subscribe(
      (kq:any)=>{
        console.log(kq)
      },
      (sida:any)=>{
        console.log(sida);
      }
    )
  }
  SetValue(){
    this.formDK.setValue({
      'TaiKhoan':'hieu',
      'MatKhau' : '123',
      'HoTen': 'dang trung hieu',
      'Email': 'dangtrunghieu147@Gmail.com',
      'SoDT': '013543453',
      'MaNhom':'GP02',
      'MaLoaiNguoiDung':'KhachHang'
    })
  }
  //Khi Load Component thì chạy code trong ngOnInit = document.ready trong Jquery
  ngOnInit() {
    this.nguoiDungSV.LayDanhSachNguoiDung(this.Vl_Nhom).subscribe(
      (kq:any)=>{
        // console.log(kq);
        
        this.mangNguoiDung = kq;
      },
      (error:any)=>
      {
        console.log(error);
      } 
    );
  }

}
