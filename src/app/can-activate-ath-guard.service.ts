import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("router activate log got triggered");

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
  }

   // not logged in so redirect to login page with the return url
   this.router.navigate(['/login']);
   return false;
  }
}
