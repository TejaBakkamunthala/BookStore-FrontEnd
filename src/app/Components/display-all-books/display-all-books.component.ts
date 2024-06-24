import { Component } from '@angular/core';
import { BookService } from '../../Services/BookService/book.service';
import { DataService } from '../../Services/DataService/data.service';

@Component({
  selector: 'app-display-all-books',
  templateUrl: './display-all-books.component.html',
  styleUrl: './display-all-books.component.scss'
})
export class DisplayAllBooksComponent {
  BooksList=null
  Book:any=[]
  reqData:any;

  bookcount:number=0;

  //books: any[] = [];

  constructor(private bookService:BookService,private dataService:DataService){}
  bookNote:any

  ngOnInit(): void {

  this.bookService.getBooks().subscribe(response=>{
      console.log(response);
      this.BooksList=response.data;
      this.Book=response.data;
      this.bookcount=response.data.length;
    })
    this.dataService.incomingData.subscribe((response)=>{
      console.log("Search in process ",response);
      this.bookNote = response;
    })

  // ngOnInit(): void {
  //   this.bookService.getBooks().subscribe(data => {
  //     this.books = data;
  //   });


  
   }




  searchString='';
  page:number=1;
  count:number=0;
  booksize:number=12;

}
