import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';
import { PortfolioDataService, SkillCategory } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  public dataService = inject(PortfolioDataService);

  public skills: {
    core: SkillCategory;
    architecture: SkillCategory;
    data: SkillCategory;
    devops: SkillCategory;
  } = this.dataService.skills;

}