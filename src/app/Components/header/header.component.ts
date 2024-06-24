import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginSingupComponent } from '../login-singup/login-singup.component';
import { CartService } from '../../Services/CartService/cart.service';
import { DataService } from '../../Services/DataService/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  carts :any[]=[];

  constructor(private dialog:MatDialog,private router:Router, private cartService :CartService,private dataService:DataService){}
  ngOnInit(): void {
    this.cartService.currCartList.subscribe(carts => {
      this.carts = carts;
    });
  }
  
 loginclick:boolean=false
 name:any
 cartItems: any[] = [];

  loggedin:boolean=false
  profiledata(){
    if(localStorage.getItem('token')){
     this.name=localStorage.getItem('fullName');
      this.loggedin=!this.loggedin;
    }
    else{
      this.loginclick=!this.loginclick
    }
  }


  login(){
    const dialogRef=this.dialog.open(LoginSingupComponent,{width:'740px',height:'475px'});
    dialogRef.afterClosed().subscribe(result=>{
    console.log('The dialog was closed');
  
    });
    this.loginclick=!this.loginclick;
  }

  logout(){
     this.loggedin=!this.loggedin;
     localStorage.removeItem('token');
  
  }

  profile(){
    this.router.navigate(['dashboard/profile'])
    console.log('profile');
  }
  
  tocart(){
    this.router.navigate(['dashboard/carts'])
    console.log("cart Successfull");
  
  }
  
  gotoWish(){
    this.router.navigate(['dashboard/wish'])
    console.log('wishlist Successfull');
  }
  
  gotoOrders(){
    this.router.navigate(['dashboard/orders'])
    console.log('Order Sucessfull');
  }
  search(event:any){
    console.log(event.target.value);
    this.dataService.outgoingData(event.target.value);
  }

}
  

  
  
  
