import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="toggleTheme()" 
            class="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-card flex items-center justify-center transform hover:scale-110 transition-all focus:outline-none"
            aria-label="Toggle Dark Mode">
      <!-- Sun Icon -->
      <svg *ngIf="isDarkMode" class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      <!-- Moon Icon -->
      <svg *ngIf="!isDarkMode" class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
    </button>
  `,
  styles: []
})
export class ThemeToggle implements OnInit {
  isDarkMode = true;

  ngOnInit() {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light') {
      this.isDarkMode = false;
      document.documentElement.classList.remove('dark');
    } else {
      // Default to dark mode if nothing stored, as requested
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
