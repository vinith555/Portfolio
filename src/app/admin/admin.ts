import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Apiservice } from '../apiservice';
import { identity } from 'rxjs';
import { Router } from '@angular/router';


interface Feedback {
  _id: string;
  name: string;
  email: string;
  feedbackmsg: string;
}
@Component({
  selector: 'app-admin',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit{

   private service = inject(Apiservice);
   private router = inject(Router);
   records: Feedback[]=[];


   ngOnInit(){
    this.service.getFeedback().subscribe((data)=>{this.records = data;
    });
   }
   detail:{_id:string,name:string,email:string,feedbackmsg:string} = {_id:'',name:'',email:'',feedbackmsg:''};
   dispMsg(i:number){
    this.detail._id = this.records[i]._id;
    this.detail.name = this.records[i].name;
    this.detail.email = this.records[i].email;
    this.detail.feedbackmsg = this.records[i].feedbackmsg;
   }
   deleteMsg(_id:string){
    if(confirm("Do you need to delete")){
      this.service.deleteFeedback(_id).subscribe();
    }
    console.log("Deleted");
   }
   clearMsg(){
    this.detail._id = '';
    this.detail.name = '';
    this.detail.email = '';
    this.detail.feedbackmsg = '';
   }
   logout(){
    localStorage.removeItem("isvalid")
    this.router.navigate(["/login"]);
   }
}
