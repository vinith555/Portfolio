import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Thoughts } from './thoughts/thoughts';
import * as AOS from 'aos';
import { Contact } from './contact/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Home,About,Projects,Thoughts,Contact,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  particles: any[] = [];
   ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: false
    });
    for (let i = 0; i < 3; i++) {
      this.birds.push({
        size: Math.random() * 40 + 40,      
        duration: Math.random() * 15 + 20,  
        delay: Math.random() * 5
      });
    }

   for (let i = 0; i < 150; i++) { 
    this.particles.push({
      size: Math.random() * 4 + 2,  
      left: Math.random() * window.innerWidth,
      top: Math.random() * window.innerHeight, 
      duration: Math.random() * 5 + 5,
      opacity: Math.random() * 0.8 + 0.2
    });
  }
  }

birds: any[] = [];

getBirdStyle(bird: any) {
  return {
    width: bird.size + 'px',
    height: bird.size + 'px',
    fontSize: bird.size + 'px',    
    animationDuration: bird.duration + 's',
    animationDelay: bird.delay + 's'
  };
}

getParticleStyle(p: any) {
  return {
    width: p.size + 'px',
    height: p.size + 'px',
    background: 'white',
    borderRadius: '50%',
    position: 'absolute',
    left: p.left + 'px',
    top: p.top + 'px',
    opacity: p.opacity,
    boxShadow: `0 0 ${p.size * 4}px rgba(255,255,255,0.9)`, 
    animation: `fall ${p.duration}s linear infinite`
  };
}

 menuOpen = false; 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  currentYear: number = new Date().getFullYear();
}
