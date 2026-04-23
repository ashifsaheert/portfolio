import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Architecture } from './components/architecture/architecture';
import { CaseStudy } from './components/case-study/case-study';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { ThemeToggle } from './components/theme-toggle/theme-toggle';
import { ResumeComponent } from './components/resume/resume'; // ✅ ADD

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Skills,
    Projects,
    Architecture,
    CaseStudy,
    Experience,
    Contact,
    Footer,
    ThemeToggle,
    ResumeComponent // ✅ ADD
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'portfolio';
}