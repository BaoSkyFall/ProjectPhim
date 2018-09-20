import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _islogin:boolean=false;
  _isAdmin:boolean=false;
  KiemTraDangNhap()
  {
  let localUser=JSON.parse(localStorage.getItem('User'));
  if(localUser!=null)
  {
    this._islogin=true;
  }
  else{
    this._islogin=false;
  }
  }
  KiemTraAdmin()
  {
  let localUser=JSON.parse(localStorage.getItem('User'));
  if(localStorage.MaLoaiNguoiDung=="QuanTri")
  {
    this._isAdmin=true;
  }
  else{
    this._isAdmin=false;
  }
  }
  constructor() { }
}
