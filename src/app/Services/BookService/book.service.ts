import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book, Cart } from '../../Model/bookstore.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any

  Books:Book[]=[]
  Carts:Cart[]=[]

  constructor(private httpService: HttpService)  {this.token=localStorage.getItem('token') }

  
   getBooks(): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

   return this.httpService.getService('https://localhost:7134/api/Book/GetAllBooks', true,header,);
  }



  

//getAllFeedbacks
  getFeedbacks(): Observable<any> {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
  //  return this.http.get<any>(this.apiUrl);
    return this.httpService.getService('https://localhost:7134/api/Feedback/GetAllFeedbacks', true,header,);
    //https://localhost:7134/api/Feedback/GetAllFeedbacks
  }


  addcart(reqData:any):Observable<any>{
    let userId=reqData.userId;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService(`https://localhost:7134/api/Cart/AddCart?UserId=${userId}`,reqData,true,header);
   
  }



  addWish(reqData:any):Observable<any>{
    let userId=reqData.userId;
    let bookId=reqData.bookId;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
      
    }
    return this.httpService.postService(`https://localhost:7134/api/Wishlist/AddWishlist?UserId=${userId}&BookId=${bookId}`,reqData,true,header);

  }

  getaddress(reqData: any) {
    const userId = reqData.userId;
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    //https://localhost:7134/api/Address/GetAddressByUserId?UserId=3

    return this.httpService.getService(`https://localhost:7134/api/Address/GetAddressByUserId?UserId=${userId}`, true, header);

  }


  


  wishList(reqData:any){
    const userId = reqData.userId;
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService(`https://localhost:7134/api/Wishlist/GetWishlistByUserId?UserId=${userId}`,true,header);

  }


  deleteWishList(Wishlist: number) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.httpService.deleteService(`https://localhost:7134/api/Wishlist/DeleteWishlist?Wishlist=${Wishlist}`, true, header);
    //https://localhost:7134/api/Wishlist/DeleteWishlist?Wishlist=5

  }

  
  
  private cartList = new BehaviorSubject<any>([]);
currCartList = this.cartList.asObservable();
updateCartList(newValue: any[]) {
  this.cartList.next(newValue);
}


  
  
  
  

  
  


 }

