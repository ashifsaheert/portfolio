import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {}
