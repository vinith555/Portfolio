import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login{
  email:string = '';
  password:string = '';
  isvalid:boolean = false;
  private router = inject(Router);
  private apiservice = inject(Apiservice);

  login(){
    console.log(this.email+" "+this.password);
    this.apiservice.login({email:this.email,password:this.password}).subscribe((data)=>{
      console.log(data);
      this.isvalid = true;
      localStorage.setItem("isvalid","true");
      this.router.navigate(['/admin']);
    },(err)=>{
      alert("User does not exist");
      this.email = '';
      this.password = '';
    });
  }
}
