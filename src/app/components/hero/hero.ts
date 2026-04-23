import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  private resumeService = inject(ResumeService);

  // 🔥 Loading state
  public isGeneratingResume = false;

  // 🔥 Track which button is active
  public generatingAction: 'view' | 'download' | null = null;

  // 🔽 Scroll function
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 🚀 MAIN FUNCTION
  async generateResume(action: 'view' | 'download') {

    // Prevent double clicks
    if (this.isGeneratingResume) return;

    this.isGeneratingResume = true;
    this.generatingAction = action;

    try {
      const success = await this.resumeService.generatePdf('resume-template', action);

      if (!success) {
        console.log('generation failed');
      }

    } catch (error) {
      console.error('Resume error:', error);
      alert('Something went wrong while generating resume');
    } finally {
      // ✅ Always reset state
      this.isGeneratingResume = false;
      this.generatingAction = null;
    }
  }
}