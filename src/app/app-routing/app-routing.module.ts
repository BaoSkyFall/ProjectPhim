import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouteConfigLoadEnd, RouterModule} from '@angular/router';
import { HomelayoutComponent } from '../home/homelayout/homelayout.component';
import { AdminLayoutComponent } from '../admin/admin-layout/admin-layout.component';
import { TrangchuComponent } from '../home/homelayout/trangchu/trangchu.component';
import { TrangchitietComponent } from '../home/homelayout/trangchitiet/trangchitiet.component';
import { DangKyComponent } from '../home/homelayout/dang-ky/dang-ky.component';
import { QuanLyPhimComponent } from '../admin/admin-layout/quan-ly-phim/quan-ly-phim.component';
import { SideBarComponent } from '../admin/admin-layout/side-bar/side-bar.component';
import { QuanLyNguoiDungComponent } from '../admin/admin-layout/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { DangNhapComponent } from '../home/homelayout/dang-nhap/dang-nhap.component';
import { TrangdatveComponent } from '../home/homelayout/trangdatve/trangdatve.component';
import { LoginServiceService } from '../services/login-service.service';
import { AdminServiceService } from '../services/admin-service.service';
import { ThongkeComponent } from '../admin/admin-layout/thongke/thongke.component';

//Tạo đường dẫn
const appRoutes:Routes=[
  {path:'',component:HomelayoutComponent,children:[
    {path:'',component:TrangchuComponent},
    {path:'chitiet/:maphim',component:TrangchitietComponent},
    {path:'dangky',component:DangKyComponent},
    {path:'dangnhap',component:DangNhapComponent},
    {path:'datve/:malichchieu',canActivate:[LoginServiceService],component:TrangdatveComponent}
    
  ]},
  {path:'admin',component:AdminLayoutComponent,children:[
    {path:'',component:ThongkeComponent},
    {path:'quanlyphim',component:QuanLyPhimComponent},
    {path:'quanlynguoidung',component:QuanLyNguoiDungComponent}


  ]}
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
