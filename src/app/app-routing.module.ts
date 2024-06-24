import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSingupComponent } from './Components/login-singup/login-singup.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { DisplayOneBookComponent } from './Components/display-one-book/display-one-book.component';
import { DisplayAllBooksComponent } from './Components/display-all-books/display-all-books.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { AddressComponent } from './Components/address/address.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { OrderSummaryComponent } from './Components/order-summary/order-summary.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { OrderssComponent } from './Components/orderss/orderss.component';
import { TodoComponent } from './Components/todo/todo.component';

const routes: Routes = [
  {path:'login',component:LoginSingupComponent},
  {path:'header',component:HeaderComponent},
  {path:'display',component:DisplayOneBookComponent},
  {path:'details',component:BookDetailsComponent},
  {path:'carts',component:CartComponent},
  {path:'wishs',component:WishlistComponent},
  {path:'address',component:AddressComponent},
  {path:'profile',component:ProfileInformationComponent},
  {path:'summary',component:OrderSummaryComponent},
  {path:'success',component:OrderSuccessComponent},
  {path:'orders',component:OrderssComponent},
  {path:'todo',component:TodoComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
   {path:'getall',component:DisplayAllBooksComponent},
   {path:'bookDetails/:id',component:BookDetailsComponent},
   {path:'carts',component:CartComponent},
   {path:'wish',component:WishlistComponent},
   {path:'address',component:AddressComponent},
   {path:'profile',component:ProfileInformationComponent},
   {path:'summary',component:OrderSummaryComponent},
   {path:'success',component:OrderSuccessComponent},
   {path:'orders',component:OrderssComponent}

  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
