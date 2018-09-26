import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from '../../../services/phim.service';

@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.css']
})
export class TrangchitietComponent implements OnInit {
  public Maphim:string;
  public phimItem:any;
  public trailerPhim:string;
  constructor(private activated:ActivatedRoute,private phimSV:PhimService ) { }
  loaiPhimSwitch:string = 'phimdangchieu';

  ngOnInit() {
    this.activated.params.subscribe(
      (kq:any)=>{
        this.Maphim=kq.maphim;
        console.log(this.Maphim);
        
        this.phimSV.LayChiTietPhim(this.Maphim).subscribe(
          (kq:any)=>{
            this.phimItem=kq;
            let mangTrailer =this.phimItem.Trailer.split('watch?v=');
            this.trailerPhim=`${mangTrailer[0]}embed/${mangTrailer[1]}`;
            console.log(this.phimItem.LichChieu);
          }
        )
      }
    )
    
  }

}
