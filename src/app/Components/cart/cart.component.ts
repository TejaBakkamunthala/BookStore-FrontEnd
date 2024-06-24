import { Component, OnInit } from '@angular/core';
import { BookService } from '../../Services/BookService/book.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginSingupComponent } from '../login-singup/login-singup.component';
import { CartService } from '../../Services/CartService/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  
  constructor(public  cartService:CartService, public book:BookService,public dialog:MatDialog, public router:Router){}


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
   
  
  
  // increment(cartItem: any){
  //   cartItem.quantity++;
  //   console.log('increases')
  
  // }
  
  // decrement(cartItem: any){
  //   if(cartItem.quantity<=1){
  //     cartItem.quantity=1;
  //   }
  //   else{
  //     cartItem.quantity--;
  //   }
    
  // }
  



  handleevent($event:any){
    this.ordersummary=$event
  }



  opendialog() {
    if (localStorage.getItem('token')) {
      this.useraddress = true;
    } else {
      const dialogRef = this.dialog.open(LoginSingupComponent, { width: '740px', height: '475px' });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // Handle any actions after the dialog is closed, if needed
      });
    }
  }
  
  deleteCart(CartId: number): void {
    this.cartService.deleteCart(CartId).subscribe(
      (response: any) => {
        console.log('Cart item deleted successfully', response);
        this.getData(); // Refresh the cart list after deletion
      },
      (error: any) => {
        console.error('Error deleting cart item', error);
      }
    );
  }
   
  orderSucess(){
    this.router.navigate(['dashboard/success']);
    console.log('Succesfull');
  }




  //update cart

  // increment(item: any) {
  //   item.quantity++;
  //   this.updateCartItem(item);
  // }

  // decrement(item: any) {
  //   if (item.quantity > 0) {
  //     item.quantity--;
  //     this.updateCartItem(item);
  //   }
  // }


  increment(cartItem: any) {
    this.updateQuantity(cartItem.cartId, 1);
  }

  decrement(cartItem: any) {
    if (cartItem.quantity > 1) {
      this.updateQuantity(cartItem.cartId, -1);
    }
  }
  updateQuantity(cartId: number, quantityChange: number) {
    this.cartService.updateCartQuantity(cartId, quantityChange).subscribe(
      response => {
        console.log('Cart quantity updated', response);
        this.getData();
    });
  }

  updateCartList(): void {
    const userId = localStorage.getItem('userId');
      this.cartService.cartsList({ userId: userId }).subscribe(cartItems => {
        this.cartService.updateCartList(cartItems.data);
      });

  

  //   updateCartList(): void {
  //   const userId = localStorage.getItem('userId');
  //     this.cartService.cartsList({ userId: userId }).subscribe(cartItems => {
  //       this.cartService.updateCartList(cartItems.data);
  //     });
  // }

  // updatePrices(item: any) {
  //   item.totalPrice = item.quantity * item.price;
  //   item.totalOriginalPrice = item.quantity * item.originalPrice;
  // }


    }
  }
