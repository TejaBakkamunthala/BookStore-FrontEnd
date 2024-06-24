import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrl: './profile-information.component.scss'
})
export class ProfileInformationComponent implements OnInit {

  name:any;
  email:any;
  password:any;
  mobile:any;
  ngOnInit(): void {
    this.name=localStorage.getItem('fullName')
    this.email=localStorage.getItem('emailId')
    this.password=localStorage.getItem('password')
    this.mobile=localStorage.getItem('mobileNumber')
  }

}

