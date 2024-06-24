import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-one-book',
  templateUrl: './display-one-book.component.html',
  styleUrl: './display-one-book.component.scss'
})
export class DisplayOneBookComponent {
  
  constructor(private router:Router){}

  @Input() Book:any;

  ngOnInit(): void {}

  toopenbook(){
    this.router.navigate(['dashboard/bookDetails', this.Book.bookId])
  }
}
