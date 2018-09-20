import { Component, OnInit } from '@angular/core';
import { TransformDataService } from '../../../services/transform-data.service';
import { Phim} from '../../../../app/models/phim.model'
import { PhimService } from '../../../services/phim.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { element } from 'protractor';
import swal from 'sweetalert2'

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
  public status: boolean = true;
  public DS_Phim: any[];
  public Phim_temp:Phim = new Phim;  // ToggleSidebar()
  element1: HTMLElement;
  public vl_maphim:string
  
  // {
  //   this.status==false? this.status=true:this.status=false;

  //   this.transformSV.TransformData.emit(this.status);

  // }
  ThemVaSuaPhim(phim: Phim,hinhanh:any) {
    this.element1 = document.getElementById('btn-modal');
    if (this.element1.innerHTML == "Thêm") {
      this.ThemPhim(phim,hinhanh)

    }
    else {
        this.phimSV.SuaPhim(phim).subscribe(
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
  Change()
  {
    this.Phim_temp= new Phim;
    this.element1=document.getElementById('btn-modal');
    this.element1.innerHTML="Thêm";
    this.element1=document.getElementById('title-modal');
    this.element1.innerHTML="Thêm Phim Mới";

    
  }

  ClickSuaPhim(object:any)
  {


    this.element1=document.getElementById('btn-modal');
    this.element1.innerHTML="Sửa";
    this.element1=document.getElementById('title-modal');
    this.element1.innerHTML="Sửa Phim";
    this.Phim_temp.MaPhim=object.target.dataset.maphim;
    this.vl_maphim=this.Phim_temp.MaPhim;    
    console.log(this.vl_maphim);
    this.Phim_temp.TenPhim=object.target.dataset.tenphim;
    this.Phim_temp.Trailer=object.target.dataset.trailer;
    this.Phim_temp.HinhAnh=object.target.dataset.hinhanh;
    this.Phim_temp.MoTa=object.target.dataset.mota;    
    this.Phim_temp.MaNhom=object.target.dataset.manhom;
    this.Phim_temp.DanhGia=object.target.dataset.danhgia;
    this.Phim_temp.NgayKhoiChieu=object.target.dataset.ngaykhoichieu;
    
    // this.nguoidungSV.SuaNguoiDung(this.ND_temp).subscribe(
    //   (kq:any)=>{
    //     console.log(kq);  
         
    //   }
    // )
    
    console.log(this.Phim_temp);
  }
  constructor(@Inject(DOCUMENT) document,private transformSV: TransformDataService, private phimSV: PhimService) { }
  ThemPhim(phim: Phim, hinhAnh: any) {
    // console.log(hinhAnh);

    phim.MaPhim = "1";
    phim.HinhAnh = hinhAnh[0].name;
    this.phimSV.ThemPhim(phim).subscribe(
      (kq: any) => {
        console.log(kq);
        this.phimSV.Upload(phim.TenPhim, hinhAnh[0]).subscribe(
          (kq: any) => {
            console.log(kq);
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
    )
  }
  XoaPhim(MaPhim: string) {
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
        this.phimSV.XoaPhim(MaPhim).subscribe(
          (kq: any) => {
            console.log(kq);
            swalWithBootstrapButtons(
          
              'Đã xóa thành công!',
              'Phim đã được xóa',
              'success'
            )
          }
        )
      
      }
    })
    
  }
  ngOnInit() {
    

    this.transformSV.TransformData.subscribe(
      (kq: any) => {
        this.status = kq;
        // console.log(kq);
      }
    )
    this.phimSV.LayDanhSachPhim().subscribe(
      (kq: any) => {
        console.log(kq);
        this.DS_Phim = kq;
        for (let i = 0; i < kq.length; i++) {
          let mangTrailer = this.DS_Phim[i].Trailer.split('watch?v=');
          this.DS_Phim[i].Trailer = `${mangTrailer[0]}embed/${mangTrailer[1]}`;
        }

      }
    )
  }

}
