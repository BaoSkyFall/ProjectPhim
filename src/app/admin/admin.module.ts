import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SideBarComponent } from './admin-layout/side-bar/side-bar.component';
import { QuanLyPhimComponent } from './admin-layout/quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './admin-layout/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { ThongkeComponent } from './admin-layout/thongke/thongke.component';

@NgModule({
  imports: [
    CommonModule,RouterModule,FormsModule,PipeModule,
    NgbModule.forRoot()
  ],
  declarations: [AdminLayoutComponent, SideBarComponent, QuanLyPhimComponent, QuanLyNguoiDungComponent, AdminHeaderComponent, ThongkeComponent],
  exports: [AdminLayoutComponent,SideBarComponent,QuanLyPhimComponent,QuanLyNguoiDungComponent,NgbModule],
})
export class AdminModule { }
