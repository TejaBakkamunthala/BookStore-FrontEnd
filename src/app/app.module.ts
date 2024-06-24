import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginSingupComponent } from './Components/login-singup/login-singup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatRadioButton } from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from './Components/header/header.component';
import { MatDividerModule } from '@angular/material/divider';
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
import { FilterPipe } from './Pipes/filter.pipe';
import { TodoComponent } from './Components/todo/todo.component';









@NgModule({
  declarations: [
    AppComponent,
    LoginSingupComponent,
    DashboardComponent,
    HeaderComponent,
    DisplayOneBookComponent,
    DisplayAllBooksComponent,
    BookDetailsComponent,
    CartComponent,
    WishlistComponent,
    AddressComponent,
    ProfileInformationComponent,
    OrderSummaryComponent,
    OrderSuccessComponent,
    OrderssComponent,
    FilterPipe,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatTooltipModule,
    MatDividerModule,
    MatRadioButton,
    MatRadioModule,
    CommonModule


    ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
