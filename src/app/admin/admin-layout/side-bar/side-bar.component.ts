import { Component, OnInit } from '@angular/core';
import { TransformDataService } from '../../../services/transform-data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public statusSideBar: boolean = true;
  public statusText:boolean=true;
  constructor(private transformSV: TransformDataService) { }
  ToggleQuanLyPhim() {
    this.statusSideBar == true ? this.statusSideBar = false : this.statusSideBar = true;
    console.log(this.statusSideBar);
    this.transformSV.TransformData.emit(this.statusSideBar);
    // this.statusSideBar == true ? this.statusSideBar = false : this.statusSideBar = true;
    
    // this.statusSideBar == true ? this.statusSideBar = false : this.statusSideBar = true;


  }
  ngOnInit() {
    //sử dụng subcribe để lấy tham số output của TransformData đã chuyển trước đó
    // this.transformSV.TransformData.subscribe(
    //   (kq: any) => {
    //     console.log(kq);        
    //     // this.statusSideBar = kq;
    //   }
    // )
  }

}
