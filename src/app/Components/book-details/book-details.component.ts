import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../Services/BookService/book.service';
import { HttpService } from '../../Services/http/http.service';
import { CartService } from '../../Services/CartService/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent  implements OnInit{

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService, private httpService: HttpService, private router:Router, private cartService: CartService){}
  id: any;
  Books: any;
  count:any=1
  button=true

  cart: any[] = [];

  data: any = {
    bookId:'',
    title:'',
    author:'',
    rating:'',
    ratingCount:'',
    price:'',
    originalPrice:'',
    description:'',
    image:'',
    quantity:''
  };

  feedbacks: any[] = [];
  rating: number = 0;
  review: string = '';

  feedback:any= {
    feedbackId :'',
    userId :'',
    bookId :'',
    userName :'',
    rating :'',
    review :''
};


  ngOnInit(): void {
    this.getBooks();
    this.getFeedbacks();
     // Accessing the 'id' route parameter
     this.id = this.activatedRoute.snapshot.params;
  }

  

     // Fetching books from the service
     getBooks(): void {
     this.bookService.getBooks().subscribe(resp => {
       this.Books = resp.data;
       const result = this.Books.filter((item: any) => item.bookId ==this.id.id);
       console.log(result);
       this.data=result[0];
       console.log(this.data);
        
     }); 
    }

 // }


 
  //feedbacks;

  getFeedbacks(): void {
  this.bookService.getFeedbacks().subscribe(resp => {
    this.feedbacks = resp.data;
    const result = this.feedbacks.filter((item: any) => item.bookId ==this.id.id);
    console.log(result);
    this.data.feedbacks=result;
    console.log(this.data.feedbacks);
     
  }); 
}
  // submitFeedback() {
  //   const newFeedback = { rating: this.rating, review: this.review };
  //   this.feedbackService.addFeedback(newFeedback).subscribe(() => {
  //     this.loadFeedbacks();
  //   });
  // }

  setRating(stars: number) {
    this.rating = stars;
  }



  add(cartItem:any){
    let reqData={
      userId:localStorage.getItem('userId'),
      bookId:this.data.bookId,
    }
    console.log(reqData);
    this.bookService.addWish(reqData).subscribe((resp:any)=>{
      console.log(resp);
      if(resp.success){
        this.router.navigate(['dashboard/wish'])
      }
    })
  }
  increment(){
    this.count+=1;
  }

  decrement(){
    if(this.count>1){
      this.count-=1;
    }
  }

  Quantity(): void{
    let reqData={
      quantity:this.count,
      bookId:this.data.bookId,
      userId:localStorage.getItem('userId')

    }
    this.bookService.addcart(reqData).subscribe((res:any)=>{
      console.log(res);
      if(res.success){
        this.router.navigate(['dashboard/carts'])
      }
    })
  }
  
  onclick()
  {
    this.router.navigate(['dashboard/wish']);
  }

  
}