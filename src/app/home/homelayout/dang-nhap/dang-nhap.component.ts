import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from '../../../services/nguoi-dung.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { trigger, state,style } from '@angular/animations';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css'],
  animations:[
    trigger('DemoHieuUng',[
      state('inactive',style({
        backgroundColor:'red',
        width:'300px'
      })),
      state('active',style({
        backgroundColor:'green',
        width:'300px'
      }))

    ])
  ]
})
export class DangNhapComponent implements OnInit {

  @ViewChild('formDangKy') formDK: NgForm;
  public taikhoan: string;
  public matkhau: string;
  public state:string='inactive';
  public DanhSachNhom: string[] = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]
  public today = new Date();
  public mangNguoiDung: any[] = [];
  //Inject Service vào hàm khởi tạo
  constructor(private nguoiDungSV: NguoiDungService, private router: Router,private authSV:AuthService) {

  }
  DangKy(value) {
    // console.log(value);
    // this.formDK.reset();
    // this.mangNguoiDung.push(value);
    this.nguoiDungSV.ThemNguoiDung(value).subscribe(
      (kq: any) => {
        if (typeof (kq) == "object") {

          console.log('aaa')
          console.log(kq);
        }
      },
      (sida: any) => {
        console.log(sida);
      }
    )
  }
  DemoHieuUng()
  {
    this.state=='inactive'?this.state='active':this.state='inactive'
  }
  DangNhap(value) {
    console.log(value)
    this.nguoiDungSV.KiemTraDangNhap(value.TaiKhoan, value.MatKhau).subscribe(
      (kq: any) => {
        if (typeof (kq) == "object") {

          let temp = JSON.stringify(kq);
          localStorage.setItem("User", temp);
       
          this.router.navigate(["/"]);
         
          // console.log(kq.MaLoaiNguoiDung)
        }

      },
      (sida: any) => {
        console.log(sida);
      }
    );
  }
  SetValue() {
    this.formDK.setValue({
      'TaiKhoan': 'hieu',
      'MatKhau': '123',
      'HoTen': 'dang trung hieu',
      'Email': 'dangtrunghieu147@Gmail.com',
      'SoDT': '013543453',
      'MaNhom': 'GP02',
      'MaLoaiNguoiDung': 'KhachHang'
    })
  }
  //Khi Load Component thì chạy code trong ngOnInit = document.ready trong Jquery
  ngOnInit() {

  }

}


