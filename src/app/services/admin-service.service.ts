import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService implements CanActivate{
   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    this.AuthSV.KiemTraAdmin();
    if(this.AuthSV._isAdmin)
    {      
      return true;
    }
    else{
      alert("Bạn không có quyền vào trang này!");
      this.router.navigate(['/']);
    }
  }
  constructor(private AuthSV:AuthService,private router:Router) { }
}
