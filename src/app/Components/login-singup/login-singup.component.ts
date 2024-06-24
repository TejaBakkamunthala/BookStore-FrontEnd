import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user/user.service';

@Component({
  selector: 'app-login-singup',
  templateUrl: './login-singup.component.html',
  styleUrl: './login-singup.component.scss'
})
export class LoginSingupComponent implements OnInit {
  loginDataForm!: FormGroup;
  SignUpDataForm!:FormGroup;
  displayLogin = true; 
  constructor(private formBuilder : FormBuilder , private userService : UserService){}

  ngOnInit(): void {
    this.loginDataForm=this.formBuilder.group({
      emailId :['',[Validators.email,Validators.required]],
      password:['',[Validators.required]]
    })
    this.SignUpDataForm=this.formBuilder.group({
      fullName:['',[Validators.required]],
      emailId:['',[Validators.email,Validators.required]],
      password:['',Validators.required],
      mobileNumber:['',Validators.required]
    })
  }

  OnLogin(){
    let reqData={
       emailId:this.loginDataForm.value.emailId,
       password:this.loginDataForm.value.password
    } 
    this.userService.login(reqData).subscribe((response:any)=>{
      console.log("Login Successfull")
      //console.log(response);
      // localStorage.setItem("token",response.data);
      // localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.id);
      localStorage.setItem('fullName',response.data.fullName);
      localStorage.setItem('emailId',response.data.emailId);
      localStorage.setItem('password',response.data.password);
      localStorage.setItem('mobileNumber',response.data.mobileNumber);
      localStorage.setItem('token', response.data.token);
    })
  }

  OnSignUp(){
    let reqData={
      fullName:this.SignUpDataForm.value.fullName,
      emailId:this.SignUpDataForm.value.emailId,
      password:this.SignUpDataForm.value.password,
      mobileNumber:this.SignUpDataForm.value.mobileNumber
    } 
    this.userService.singin(reqData).subscribe((response:any)=>{
      console.log("Sign Up Successfull")
      console.log(response);
    })
  

  }
}

