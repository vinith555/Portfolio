import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  email = 'vinithmuthusamy555@gmail.com';
  phone = '+91 9943525976';
  clicks:boolean = true;
  private service = inject(Apiservice);
  onSubmit(form:NgForm ) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      this.service.postFeedback(form.value).subscribe(
        (data)=>{console.log(data);
      },(err)=>{
        console.log(err);
      })
      this.clicks = false;
      form.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
    setTimeout(()=>{this.clicks = true},10000);
  }
}
