import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService implements CanActivate {
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    this.AuthSV.KiemTraDangNhap();
    if(this.AuthSV._islogin)
    {
      return true;
    }
    else{
      alert("Vui Long Dang Nhap");
      this.router.navigate(['/'])
    }
  }
  constructor(private AuthSV:AuthService,private router:Router) { }
}
