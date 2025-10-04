import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  email = 'vinithmuthusamy555@gmail.com';
  phone = '+91 9943525976';
  onSubmit(form:NgForm ) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      // Here you can integrate with a backend service (e.g., EmailJS)
      alert('Message sent! (This is a demo - check console for details)');
      form.reset();
    } else {
      alert('Please fill in all fields correctly.');
    }
  }
}
