import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Phim } from '../models/phim.model';

@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private _http: Http) {

  }
  public LayDanhSachPhim(): Observable<any> {
    let apilayDanhSachPhim = "http://sv2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP06"
    let Observe = this._http.get(apilayDanhSachPhim).pipe(
      map((result: Response) => result.json()));
    return Observe;
  }
  public LayChiTietPhim(maphim: string): Observable<any> {
    let apiLayChiTietPhim = `http://sv2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maphim}`
    let Observe = this._http.get(apiLayChiTietPhim).pipe(
      map((result: Response) => result.json()));
    return Observe;
  }
  public XoaPhim(MaPhim:string)
  {
    let apiXoaPhim = `http://sv2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${MaPhim}`;
    let Observe = this._http.delete(apiXoaPhim).pipe(
      map((result: Response) => result.json()));
    return Observe;
  }
  public ThemPhim(phim: Phim) {
    let apiThemPhim = "http://sv2.myclass.vn/api/QuanLyPhim/ThemPhimMoi";
    let header = new Headers();
    header.append('Content-Type', 'application/json;charset=UTF-8');
    let Observe = this._http.post(apiThemPhim, phim, { headers: header }).pipe(
      map((result: Response) => result.json()));
    return Observe;
    ;

  }
  public Upload(TenPhim:string,file:any)
  {
    let apiUpload=" http://sv2.myclass.vn/api/QuanLyPhim/UploadFile";
    var formData = new FormData();
    let header = new Headers();
    formData.append("Files",file);
    formData.append("TenPhim",TenPhim);
    let Observe = this._http.post(apiUpload,formData).pipe(
      map((result: Response) => result.json()));
    return Observe;
   
  }
  public LayChiTietPhongVe(malichchieu: string): Observable<any> {
    let apiLayChiTietPhongVe = `http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`
    let Observe = this._http.get(apiLayChiTietPhongVe).pipe(
      map((result: Response) => result.json()));
    return Observe;
  }

  public DatVe(malichchieu: string, DatVe: any): Observable<any> {
    let apiDatVe = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`
    var DanhSachVe: any[] = [];

    var ve = {
      MaLichChieu: malichchieu,
      TaiKhoanNguoiDung: 'nguyenvana',
      DanhSachVe: [
        { MaGhe: 1, GiaVe: 75000 },
        { MaGhe: 2, GiaVe: 75000 },]

    }
    let Observe = this._http.get(apiDatVe).pipe(
      map((result: Response) => result.json()));
    return Observe;
  }

}

