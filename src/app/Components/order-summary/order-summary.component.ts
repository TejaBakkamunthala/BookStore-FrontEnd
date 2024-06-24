import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../Services/BookService/book.service';
import { CartService } from '../../Services/CartService/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from '../../Services/order/order.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})

export class OrderSummaryComponent  implements OnInit{


constructor(public  cartService:CartService,public orderService:OrderService,public dialog:MatDialog, public router:Router){}


cartvalue:any=[]
servercartvalue:any
useraddress:boolean=false
ordersummary:boolean=false
toggleplaceorder:boolean=true
ordersdata:boolean=true

carts:any[]=[]
  count:any=1

  cart:any={
    cartId:'',
    orderId:'',
    image:'',
    title:'',
    author:'',
    totalPrice:'',
    totalOriginalPrice:'',
    quantity:''
  }


  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let reqData = {
      userId: localStorage.getItem('userId')
    };
    this.cartService.cartsList(reqData).subscribe(resp => {
      this.carts=resp.data;
      console.log(resp);
      this.cartService.updateCartList(resp);
  
      
      this.cartService.currCartList.subscribe((resp: any[]) => {  // Explicitly define type for resp
        this.cartService.Carts = resp; // Assuming Carts is a property of BookService
        this.cart = resp;
        console.log(this.cart);
        for (let i = 0; i < resp.length; i++) {
          this.cartvalue.push(resp[i]);
          console.log(this.cartvalue);
        }
  
        // Assuming Books is a property of BookService
        const cartlistdata = this.cartService.Books.filter((item: any) => {
          return this.cartvalue.some((cartItem: any) => {
            if (cartItem.id === item.id) {
              item.quantity = cartItem.quantity;
              return true;
            }
            return false;
          });
        });
        console.log(cartlistdata);
        //this.cart=cartlistdata
      }); // Close the subscription block
    }); // Close the outer subscription block
    
  }
 




  gotobooks(){
    this.router.navigate(['dashboard/getall']);
  }



  placeOrder(cartId: number): void {
    this.orderService.PlacedOrders(cartId).subscribe(response => {
        console.log('Order Successful', response);
        this.router.navigate(['dashboard/success'])
    });
  }


  // cancelOrder(OrderId:number):void{
  //   this.orderService.CancelOrder(OrderId).subscribe(response=>{
  //     console.log("Order Cancel Successfully",response);
  //     this.router.navigate(['dashboard/carts'])
  //   });
  // }


  
}




 