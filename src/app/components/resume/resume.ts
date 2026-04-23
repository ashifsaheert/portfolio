import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css'
})
export class ResumeComponent {

  private dataService = inject(PortfolioDataService);
  public data = this.dataService.getData();

  async downloadPDF(): Promise<void> {
    const element = document.getElementById('resume-template');

    if (!element) {
      console.error('Resume element not found');
      return;
    }

    const opt = {
      margin: 10,
      filename: 'Ashif_Saheer_T_Resume.pdf',
      image: { type: 'jpeg' as const, quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await (html2pdf() as any).set(opt).from(element).save();
      console.log('PDF generated successfully');
    } catch (err) {
      console.error('PDF generation failed', err);
    }
  }

  getSkills(items: any[]) {
    return items
      .map(i => typeof i === 'string' ? i : i.name)
      .join(', ');
  }
}