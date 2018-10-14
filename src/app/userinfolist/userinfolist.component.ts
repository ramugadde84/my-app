import { Component, OnInit } from '@angular/core';
import { UserInfoListService } from '../service/userinfolist.service';
import { UserInfo } from '../model/userinfo';

@Component({
  selector: 'app-userinfolist',
  templateUrl: './userinfolist.component.html',
  styleUrls: ['./userinfolist.component.css']
})
export class UserinfolistComponent implements OnInit {

  public data: UserInfo[];

  constructor(private userInfoListService: UserInfoListService) { }

  ngOnInit() {
    this.getUserInfoList();
  }

  getUserInfoList(): void {
    this.userInfoListService.getUsersInfoList().subscribe(users => { 
     this.data = users
   });
   
  }
}
