import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationGuard implements CanActivate {
  constructor(private router : Router ){

  }  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = JSON.parse(localStorage.getItem('user'))
      if(user.user.user_type_id == 2){
        return true;
      }else{
        console.log('go back')
        this.router.navigate(['/auth/not-found'])
        return false
      }
    }

}
