import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book, Cart } from '../../Model/bookstore.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    
token :any;
Books:Book[]=[]
Carts:Cart[]=[]

constructor(private httpService:HttpService, private http:HttpClient) {this.token=localStorage.getItem('token') }

private cartList = new BehaviorSubject<any>([]);
currCartList = this.cartList.asObservable();

updateCartList(newValue: any[]) {
  this.cartList.next(newValue);
}


  cartsList(reqData:any):Observable<any>{
    const userId = reqData.userId;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    // return this.httpService.getService(`//https://localhost:7134/api/Cart/GetCartDetailsByUserId?UserId=${UserId}`,true,header);
    return this.httpService.getService(`https://localhost:7134/api/Cart/GetCartDetailsByUserId?UserId=${userId}`,true,header);


  }

  
  
  deleteCart(CartId: number) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.deleteService(`https://localhost:7134/api/Cart/DeleteCart?CartId=${CartId}`, true, header);
  }

 
  


  

  
  


    // updateCart(reqData: any) {
    //   const cartId=reqData.cartId;
    //   const quantity=reqData.quantity;
    //   let header = {
    //     headers: new HttpHeaders({
    //       'Content-type': 'application/json',
    //       'Authorization': 'Bearer ' + this.token
    //     })
    //   };
    //   return this.httpService.putService(`https://localhost:7134/api/Cart/UpdateCart?CartId=${cartId}&Qunatity=${quantity}`,reqData, true, header);
    // }
    // return this.httpService.postService(`https://localhost:7134/api/Wishlist/AddWishlist?UserId=${userId}&BookId=${bookId}`,reqData,true,header);

  
    //https://localhost:7134/api/Cart/UpdateCart?CartId=34&Qunatity=5


    updateCartQuantity(cartId: number, quantity: number): Observable<any> {
      let header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + this.token
        })
      };
      return this.httpService.putService(`https://localhost:7134/api/Cart/UpdateCart?CartId=${cartId}&Qunatity=${quantity}`,{}, true, header);
    }
}
