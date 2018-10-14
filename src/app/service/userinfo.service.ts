import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
   })
}

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
    constructor(private http:HttpClient) { }

  postUserInfo(username: string) {
    return this.http
               .post<any>('/api/userinfo/save',JSON.stringify({ username: username }),httpOptions)
               .pipe(map(user => {
                  // login successful if there's a jwt token in the response
                   if(user && user.id) {
                      console.log(user.id);
                   }
                   return user;
               }));
  }

}