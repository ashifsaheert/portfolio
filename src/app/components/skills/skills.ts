import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {}
