import { Injectable } from '@angular/core';
import { Book, Cart } from '../../Model/bookstore.model';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token:any

  // Books:Book[]=[]
  //Carts:Cart[]=[]


  constructor(private httpService: HttpService)  {this.token=localStorage.getItem('token') }

  getAllOrders(userId : number):Observable<any>{
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
  return this.httpService.getService(`https://localhost:7134/api/Order/GetOrderDetailsByUserId?UserId=${userId}`,true,header);
  }


  PlacedOrders(cartId: number): Observable<any> {
    let header = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        })
    };
    return this.httpService.postService(`https://localhost:7134/api/Order/PlaceOrder?CartId=${cartId}`,null, true, header);
}

CancelOrder(OrderId:number): Observable<any>{
  let header={
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
    })
  };
    return this.httpService.deleteService(`https://localhost:7134/api/Order/CancelOrder?OrderId=${OrderId}`, true, header);

    //https://localhost:7134/api/Order/CancelOrder?OrderId=18


  }
}



