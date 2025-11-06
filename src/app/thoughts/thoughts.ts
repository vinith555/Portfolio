import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';


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
      quote: 'Nothing Is Impossible Until You Believe It Is Impossible.',
      clicked:false
    },
    {
      img: 'img2.png',
      quote: 'Every Problem Has Infinite Solutions.',
      clicked:false
    },
    {
      img: 'img3.png',
      quote: 'It’s Always Better To Fail Once Before You Win.',
      clicked:false
    },
    
  ];
  toggleThought(t: any) {
    this.thoughts.forEach(th => {
      if (th !== t) th.clicked = false;
    });
    t.clicked = !t.clicked;
  }
  @HostListener('document:click', ['$event'])
  clickOutside(event: any) {
    const clickedInside = event.target.closest('.thought-card');
    if (!clickedInside) {
      this.thoughts.forEach(t => (t.clicked = false));
    }
  }
}
