import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-thoughts',
  imports: [CommonModule],
  templateUrl: './thoughts.html',
  styleUrl: './thoughts.css'
})
export class Thoughts {
   thoughts = [
    {
      img: 'img1.png',
      quote: 'Nothing Is Impossible Until You Believe It Is Impossible.'
    },
    {
      img: 'img2.png',
      quote: 'Every Problem Has Infinite Solutions.'
    },
    {
      img: 'img3.png',
      quote: 'It’s Always Better To Fail Once Before You Win.'
    },
    
  ];
}
