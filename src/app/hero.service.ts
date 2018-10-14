import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) { }

  getHeros (): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>('/api/heros');
                
  }
}
