import { Component, OnInit, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'hero';

  navItems = [
    { label: 'Home', link: 'hero' },
    { label: 'About', link: 'about' },
    { label: 'Skills', link: 'skills' },
    { label: 'Projects', link: 'projects' },
    { label: 'Architecture', link: 'architecture' },
    { label: 'Case Study', link: 'case-study' },
    { label: 'Experience', link: 'experience' },
    { label: 'Contact', link: 'contact' }
  ];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });

      // Active Section Highlighting
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, { 
        threshold: 0.2, // 20% visibility triggers the highlight
        rootMargin: "-20% 0px -40% 0px" // Adjust viewport trigger boundaries
      });

      setTimeout(() => {
        this.navItems.forEach(item => {
          const sectionRef = document.getElementById(item.link);
          if (sectionRef) observer.observe(sectionRef);
        });
      }, 1000);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string) {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }
}
