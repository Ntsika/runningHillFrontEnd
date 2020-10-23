import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WebService {

  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }
  get(uri: string){
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  getWords(uri: string, data: string){
    const options = {params:new HttpParams().set('wordType', data)};
    return this.http.get(`${this.ROOT_URL}/${uri}`, options);
  }
  post(uri: string, payload: string){
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
}
