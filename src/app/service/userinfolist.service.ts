import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../model/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoListService {

  constructor(private httpClient: HttpClient) { }

  getUsersInfoList (): Observable<UserInfo[]> {
    return this.httpClient.get<UserInfo[]>('/api/userinfo/list');
                
  }
}
