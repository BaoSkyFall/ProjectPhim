import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { TrangchuComponent } from './homelayout/trangchu/trangchu.component';
import { TrangchitietComponent } from './homelayout/trangchitiet/trangchitiet.component';
import { TrangdatveComponent } from './homelayout/trangdatve/trangdatve.component';
import { HeaderComponent } from './homelayout/header/header.component';
import { FooterComponent } from './homelayout/footer/footer.component';
import { SliderComponent } from './homelayout/trangchu/slider/slider.component';
import { DanhsachphimComponent } from './homelayout/trangchu/danhsachphim/danhsachphim.component';
import { PhimDangChieuComponent } from './homelayout/trangchu/danhsachphim/phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './homelayout/trangchu/danhsachphim/phim-sap-chieu/phim-sap-chieu.component';
import { PhimItemComponent } from './homelayout/trangchu/danhsachphim/phim-item/phim-item.component';
import { TintucComponent } from './homelayout/trangchu/tintuc/tintuc.component';
import { DienAnhComponent } from './homelayout/trangchu/tintuc/dien-anh/dien-anh.component';
import { ReviewComponent } from './homelayout/trangchu/tintuc/review/review.component';
import { KhuyenmaiComponent } from './homelayout/trangchu/tintuc/khuyenmai/khuyenmai.component';
import { ItemTintucComponent } from './homelayout/trangchu/tintuc/item-tintuc/item-tintuc.component';
import { LienheComponent } from './homelayout/trangchu/lienhe/lienhe.component';
import { FormlienheComponent } from './homelayout/trangchu/lienhe/formlienhe/formlienhe.component';
import { ThongtinComponent } from './homelayout/trangchu/lienhe/thongtin/thongtin.component';
import { DanhSachGheComponent } from './homelayout/trangdatve/danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './homelayout/trangdatve/danh-sach-ghe/ghe/ghe.component';
import { DangKyComponent } from './homelayout/dang-ky/dang-ky.component';
import {FormsModule} from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';


import { DangNhapComponent } from './homelayout/dang-nhap/dang-nhap.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,FormsModule,PipeModule,
    RouterModule
    
  ],
  declarations: [
    HomelayoutComponent, 
    TrangchuComponent, 
    TrangchitietComponent, 
    TrangdatveComponent, 
    HeaderComponent, 
    FooterComponent, 
    SliderComponent, 
    DanhsachphimComponent, 
    PhimDangChieuComponent, 
    PhimSapChieuComponent, 
    PhimItemComponent, 
    TintucComponent, 
    DienAnhComponent, 
    ReviewComponent, 
    KhuyenmaiComponent,
     ItemTintucComponent, 
     LienheComponent, 
     FormlienheComponent, 
     ThongtinComponent, DanhSachGheComponent, GheComponent, DangKyComponent, DangNhapComponent,
  ],
  exports:[
    HomelayoutComponent, 
    TrangchuComponent, 
    TrangchitietComponent, 
    TrangdatveComponent, 
    HeaderComponent, 
    FooterComponent,
    SliderComponent, 
    DanhsachphimComponent, 
    PhimDangChieuComponent, 
    PhimSapChieuComponent, 
    PhimItemComponent, 
    TintucComponent, 
    DienAnhComponent, 
    ReviewComponent, 
    KhuyenmaiComponent,
    ItemTintucComponent, 
    LienheComponent, 
    FormlienheComponent, 
    ThongtinComponent,
    DanhSachGheComponent,
    GheComponent,
    DangKyComponent,
    DangNhapComponent
  ]
})
export class HomeModule { }
