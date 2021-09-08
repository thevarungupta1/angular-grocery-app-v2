import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ENDPOINTS = {
    REGISTER_URL: 'http://apolis-grocery.herokuapp.com/api/auth/register',
    LOGIN_URL:'http://apolis-grocery.herokuapp.com/api/auth/login'
  }

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any>{
    return this.http.post<any>(this.ENDPOINTS.REGISTER_URL, data)
          
  }

  login(data: any): Observable<any>{
    return this.http.post<any>(this.ENDPOINTS.LOGIN_URL, data)
  }

  logout(){
    localStorage.clear();
  }

  loggedIn(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  

}
