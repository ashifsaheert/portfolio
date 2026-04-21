import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  downloadResume() {
    alert("Resume download triggered! (Demo)");
  }
}
