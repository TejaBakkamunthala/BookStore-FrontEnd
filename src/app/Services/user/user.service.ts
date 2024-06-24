import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService:HttpService) { }

  login(reqData: any){
    console.log(reqData)
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:7134/api/User/login',reqData,false,header);
    //https://localhost:7134/api/User/login
  }
  

  singin(reqData: any){
    console.log(reqData)
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpService.postService('https://localhost:7134/api/User/Register',reqData,false,header);
    
  }
  
}
