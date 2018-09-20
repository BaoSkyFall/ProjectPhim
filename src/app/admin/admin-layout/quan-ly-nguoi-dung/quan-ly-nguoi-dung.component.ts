import { Component, OnInit } from '@angular/core';
import { PhimService } from '../../../services/phim.service';
import { NguoiDungService } from '../../../services/nguoi-dung.service';
import { NguoiDung } from '../../../models/nguoidung.model';
import { TestComponentRenderer } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { element } from 'protractor';
import swal from 'sweetalert2'

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {
  element1: HTMLElement;

  constructor(@Inject(DOCUMENT) document, private nguoidungSV: NguoiDungService, private router: Router) { }
  public vl_taikhoan: string;
  public DS_ND: any;
  public ND_temp: NguoiDung = new NguoiDung;
  public test: any;
  ThemVaSuaND(ND: NguoiDung) {
    this.element1 = document.getElementById('btn-modal');
    if (this.element1.innerHTML == "Thêm") {
      this.ThemND(ND);

    }
    else {
       this.nguoidungSV.SuaNguoiDung(ND).subscribe(
      (kq:any)=>{
        console.log(kq);  
        swal({
          position: 'center',
          type: 'success',
          title: 'Sửa thành công',
          showConfirmButton: false,
          timer: 2000
        })
      }
    )
    }
  }
  Change() {
    this.Reset();
    this.element1 = document.getElementById('btn-modal');
    this.element1.innerHTML = "Thêm";
    this.element1 = document.getElementById('title-modal');
    this.element1.innerHTML = "Thêm Người Dùng";


  }
  ThemND(ND: NguoiDung) {
    this.Reset();

    console.log(this.vl_taikhoan);
    if (ND.TenLoaiNguoiDung === "Khách hàng") {
      ND.MaLoaiNguoiDung = "KhachHang";
    }
    else {
      ND.MaLoaiNguoiDung = "QuanTri";
    }
    console.log(ND);
    this.nguoidungSV.ThemNguoiDung(ND).subscribe(
      (kq: any) => {
        console.log(ND);
        swal({
          position: 'center',
          type: 'success',
          title: 'Thêm thành công',
          showConfirmButton: false,
          timer: 2000
        })
      }
    )
  }
  Reset() {
    this.ND_temp = new NguoiDung;
  }
  SuaND(object: any) {
    this.element1 = document.getElementById('btn-modal');
    this.element1.innerHTML = "Sửa";

    this.element1 = document.getElementById('title-modal');
    this.element1.innerHTML = "Sửa Người Dùng";
    this.ND_temp.TaiKhoan = object.target.dataset.taikhoan;
    this.vl_taikhoan = this.ND_temp.TaiKhoan;
    console.log(this.vl_taikhoan);
    this.ND_temp.MatKhau = object.target.dataset.matkhau;
    this.ND_temp.HoTen = object.target.dataset.hoten;
    this.ND_temp.SoDT = object.target.dataset.sodt;
    this.ND_temp.MaNhom = object.target.dataset.manhom;
    this.ND_temp.MaLoaiNguoiDung = object.target.dataset.maloaind;
    this.ND_temp.TenLoaiNguoiDung = object.target.dataset.tenloaind;


    console.log(this.ND_temp);
  }
  XoaND(taikhoan: any) {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })

    swalWithBootstrapButtons({
      title: 'Bạn có muốn xóa không?',
      text: "Bạn sẽ không phục hồi lại được!!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có!',
      cancelButtonText: 'Không',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        taikhoan = taikhoan.target.dataset.sectionvalue;
        this.nguoidungSV.XoaNguoiDung(taikhoan).subscribe(
          (kq: any) => {
            console.log(kq);
          }
        )


      }
    })

  }
  ngOnInit() {
    this.nguoidungSV.LayDanhSachNguoiDung("GP06").subscribe(
      (kq: any) => {
        this.DS_ND = kq;
        console.log(this.DS_ND);
      }
    )
  }

}
