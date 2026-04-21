import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ScrollRevealDirective, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      // NOTE: Replace these with your actual EmailJS IDs
      await emailjs.send(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        {
          from_name: this.formData.name,
          reply_to: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          to_email: 'ashifsaheer2000@gmail.com'
        },
        'YOUR_PUBLIC_KEY' 
      );
      
      this.successMessage = 'Transmission successful. Message sent securely.';
      this.formData = { name: '', email: '', subject: '', message: '' };
    } catch (error) {
      console.error('EmailJS Error:', error);
      this.errorMessage = 'Transmission failed. Ensure your EmailJS keys are configured properly.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
