import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {GuardService} from "./services/guard.service";

@Injectable({
  providedIn: 'root'
})
export class PasswordGuard implements CanActivate {

  constructor(private svc: GuardService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let today: Date = new Date;
    //let jour: number = today.getDate();
    let dateBoolean: boolean = (today.getDate() % 2 === 0);
    let password = this.svc.password;
    return ((dateBoolean && (password.toLowerCase() === "julien"))||(!dateBoolean && (password.toLowerCase() === "matthieu")));
  }

}
