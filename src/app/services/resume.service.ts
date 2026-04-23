import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  async generatePdf(elementId: string, action: 'view' | 'download'): Promise<boolean> {

    const element = document.getElementById(elementId);
    if (!element) return false;

    // ✅ Pre-open window (fix popup block)
    let previewWindow: Window | null = null;
    if (action === 'view') {
      previewWindow = window.open('', '_blank');
    }

    try {
      // 🔥 WAIT for DOM to fully render
      await new Promise(resolve => setTimeout(resolve, 300));

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

      if (action === 'download') {
        pdf.save('Ashif_Saheer_T_Resume.pdf');
      } else {
        const blob = pdf.output('blob');
        const url = URL.createObjectURL(blob);

        if (previewWindow) {
          previewWindow.location.href = url;
        }
      }

      return true;

    } catch (err) {
      console.error('PDF Error:', err);
      return false;
    }
  }
}