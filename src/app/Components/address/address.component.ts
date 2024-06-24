import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../../Services/BookService/book.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent  {
  constructor(private book:BookService){}
  userId:any;
  addressdata:any={
    addressId:'',
    city:'',
    address:'',
    state:'',
    type:''
  }
  response:any

  orders:boolean=true
  address:boolean=true
  removebutton:boolean=true
  editaddress:boolean=true
  
  
  name=localStorage.getItem('fullName');
  mobile=localStorage.getItem('mobileNumber');

  @Output() order=new EventEmitter<any>();
  ngOnInit(): void {
    this.userId=localStorage.getItem('userId');
    console.log(this.userId);
    let reqData={
      userId:this.userId
    }
    this.book.getaddress(reqData).subscribe(result=>{
      this.response=result;
      this.addressdata=this.response.data
    })
  }

  gotoorders(){this.order.emit(this.orders)
    this.removebutton=false;}
  handleaddress(){this.address=false}
  edit(){ this.editaddress=false;}
  cancel(){ this.editaddress=true;}
}

