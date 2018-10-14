import { Component } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private bnIdle: BnNgIdleService,private logoutService: LogoutService) { // initiate it in your component constructor
    this.bnIdle.startWatching(60).subscribe((res) => {
      if(res) {
         logoutService.logout();
      }
    })
  }
}
