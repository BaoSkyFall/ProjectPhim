import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
import { PhimService } from '../../../../../services/phim.service';
declare var $: any;
@Component({
    selector: 'app-phim-dang-chieu',
    templateUrl: './phim-dang-chieu.component.html',
    styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {
    DanhSachPhimDangChieu = [

    ]

    constructor(private phimSV: PhimService) { }

    ngOnInit() {
        this.phimSV.LayDanhSachPhim().subscribe(
            (kq: any) => {
                this.DanhSachPhimDangChieu = kq;
                setTimeout(() => {
                    $('.owl-carousel-1').owlCarousel({
                        loop: true,
                        margin: 10,
                        nav: true,
                        responsive: {
                            0: {
                                items: 1
                            },
                            600: {
                                items: 3
                            },
                            1000: {
                                items: 5
                            }
                        }
                    })
                }, 100);
            },
            (sida: any) => {
                console.log(sida);
            }
        )
    }
    ngAfterViewInit() {

    }
}
