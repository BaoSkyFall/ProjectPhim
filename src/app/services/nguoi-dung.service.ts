import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { NguoiDung } from '../models/nguoidung.model';
/* Dòng Lệnh Để thực hiện chức năng Service. Sử dụng chung cho toàn bộ dự án  */
@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private _http:Http) { }
  public LayDanhSachNguoiDung(value:string):Observable<any>
  {
    let apiLayDSND =`http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${value}`;
  let Observe = this._http.get(apiLayDSND).pipe(
    map((result:Response) => result.json()));
    return Observe;
    
  }
  public ThemNguoiDung(ND:NguoiDung):Observable<any>
  {
    let apithemND =`http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    let headerthemND = new Headers();
    headerthemND.append('Content-Type','application/json;charset=UTF-8');
    let Observe = this._http.post(apithemND,ND,{headers:headerthemND}).pipe(map((result:Response) => result.json()));
    return Observe;
  }
  public KiemTraDangNhap(taikhoan:string,matkhau:string):Observable<any>
  {
    let apiKiemTraDangNhap =`http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    let Observe= this._http.post(apiKiemTraDangNhap,taikhoan).pipe(map((result:Response) => result.json()));
    return Observe;
  }
  public XoaNguoiDung(taikhoan:string):Observable<any>
  {
    let apixoaND=`http://sv2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`
    let Observe= this._http.delete(apixoaND,taikhoan).pipe(map((result:Response) => result.json()));
    return Observe;
  }
  public SuaNguoiDung(ND:NguoiDung):Observable<any>
  {
    let apiSuaNguoiDung="http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin"
    let headerthemND = new Headers();
    headerthemND.append('Content-Type','application/json;charset=UTF-8');
    let Observe= this._http.post(apiSuaNguoiDung,ND).pipe(map((result:Response) => result.json()));
    return Observe;
  }
}
