import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/BookService/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit {
  constructor(private book:BookService,public router:Router){}

  ngOnInit(): void {
    this.getWishlist();
   }

  cartvalue: any[] = [];
  Books: any;
  count: any = 1;
  id: any = 1;

  carts:any[]=[]

  cart:any={
    cartId:'',
    image:'',
    title:'',
    author:'',
    price:'',
    originalPrice:'',
  }

  


  
   getWishlist(): void {
    let reqData = {
           userId: localStorage.getItem('userId')
         };
    this.book.wishList(reqData).subscribe(
      (response: any) => {
        this.carts = response.data; // Adjust according to your API response structure
        console.log(response);
      },
      (error: any) => {
        console.error('Error fetching wishlist', error);
      }
    );
  }

  

  deleteWishlist(wishlist: number): void {
    this.book.deleteWishList(wishlist).subscribe(
      (response: any) => {
        console.log('Wishlist item deleted successfully', response);
        // Optionally, you can update the local list of wishlist items here
        this.getWishlist(); // Refresh the wishlist after deletion
      },
      (error: any) => {
        console.error('Error deleting wishlist item', error);
      }
    );
  }
  



  tohome(){
    this.router.navigate(['dashboard/getall'])
  }



}
