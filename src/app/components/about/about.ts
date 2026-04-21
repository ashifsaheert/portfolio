import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {}
