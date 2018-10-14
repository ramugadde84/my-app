import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogoutService } from '../logout.service';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      logout works!
    </p>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private router :Router,private logoutService: LogoutService) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.logoutService.logout();

  }
 }
