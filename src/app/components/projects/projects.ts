import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {}
