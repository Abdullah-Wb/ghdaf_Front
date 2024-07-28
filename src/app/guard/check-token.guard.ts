import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"))

      if (user.user.user_type_id == 3) {
        this.router.navigate(["main-apps/admin-home/dash-list"]);
      }

      if (user.user.user_type_id == 2) {
        this.router.navigate(["main-apps/org-home/org-home-layout"]);
      }
      if (user.user.user_type_id == 1) {
        this.router.navigate(["main-apps/rest-home"]);
      }

    }
    return true


  }
}
