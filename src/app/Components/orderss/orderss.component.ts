import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/BookService/book.service';
import { Router } from '@angular/router';
import { OrderService } from '../../Services/order/order.service';

@Component({
  selector: 'app-orderss',
  templateUrl: './orderss.component.html',
  styleUrl: './orderss.component.scss'
})
export class OrderssComponent implements OnInit {
  constructor(private book:BookService,private orderService:OrderService,public router:Router){}

  userId:any;

  ngOnInit(): void {
   this.userId=localStorage.getItem('userId');
    this.getOrders(this.userId);
   }

  // cartvalue: any[] = [];
  // Books: any;
  // count: any = 1;
  // id: any = 1;

  

  //carts:any[]=[]

  orders:any=[]

  // order:any={
  //   orderId:'',
  //   cartId:'',
  //   image:'',
  //   title:'',
  //   author:'',
  //   totalPrice:'',
  //   totalOriginalPrice:'',
  //   quantity:'',
  //   orderDate:''
  // }

  
   getOrders(userId: number): void {
    this.orderService.getAllOrders(userId).subscribe(
      (response: any) => {
        this.orders = response.data; 
        console.log(response);
      },
      (error: any) => {
        console.error('Error fetching order', error);
      }
    );
  }

  CancelOrder(OrderId: number): void {
    this.orderService.CancelOrder(OrderId).subscribe(
      (response: any) => {
        console.log('Order item deleted successfully', response);
        this.getOrders(this.userId);
      },
      (error: any) => {
        console.error('Error deleting order item', error);
      }
    );
  }

  tohome(){
    this.router.navigate(['dashboard/getall'])
  }





}
