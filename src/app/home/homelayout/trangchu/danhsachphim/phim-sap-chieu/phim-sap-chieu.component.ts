import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css']
})
export class PhimSapChieuComponent implements OnInit,AfterViewInit {
  DanhSachPhimSapChieu = [
    {TenPhim:"Thor: Ragnarok",HinhAnh:'../../../assets/img/thor-ragnarok-15088151416399.jpg'},
    {TenPhim:"Ferdinand",HinhAnh:'../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg'},
    {TenPhim:"Trùm Hương Cảng",HinhAnh:'../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg'},
    {TenPhim:"Ferdinand",HinhAnh:'../../../assets/img/ferdinand.jpg'},
    {TenPhim:"Trải nghiệm điểm chết",HinhAnh:'../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg'},
  ];
  constructor() { }
 
  ngOnInit() {

  }
  ngAfterViewInit(){
    $('.owl-carousel-2').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  }
}
