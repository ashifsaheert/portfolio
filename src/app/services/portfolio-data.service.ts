import { Injectable } from '@angular/core';

export interface SkillItem {
  name: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface Project {
  title: string;
  tag?: string;
  problem: string;
  solution: string;
  keyDecision: string;
  link?: string;
}

export interface ExperienceDetail {
  title?: string;
  description: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  details: ExperienceDetail[];
}

export interface AboutData {
  paragraphs: string[];
  workingOn: string;
  learning: string;
  focus: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  public readonly skills: {
    core: SkillCategory;
    architecture: SkillCategory;
    data: SkillCategory;
    devops: SkillCategory;
  } = {
      core: {
        title: '01. Core Engineering',
        items: [
          { name: 'Java / Spring Boot', level: 'Primary / Expert' },
          { name: 'Angular', level: 'Frontend / Advanced' },
          { name: 'Python', level: 'Scripting / Intermediate' }
        ]
      },

      architecture: {
        title: '02. Architecture & API',
        items: [
          { name: 'Microservices' },
          { name: 'RESTful APIs' },
          { name: 'gRPC Integration' },
          { name: 'OAuth2 / JWT' },
          { name: 'SOAP / XML' }
        ]
      },

      data: {
        title: '03. DATA_AND_MESSAGING',
        items: [
          { name: 'PostgreSQL' },
          { name: 'Oracle DB' },
          { name: 'Kafka' },
          { name: 'MySQL' },
          { name: 'IBM MQ' }
        ]
      },

      devops: {
        title: '04. DevOps & Infra',
        items: [
          { name: 'Docker' },
          { name: 'OpenShift' },
          { name: 'GitLab CI' },
          { name: 'GitHub Actions' },
          { name: 'RHEL' },
          { name: 'Tomcat' }
        ]
      }
    };

  public readonly profile = {
    name: 'Ashif Saheer T',
    title: 'Backend-Focused Software Engineer',
    email: 'ashifsaheer2000@gmail.com',
    phone: '+91 8086755837',
    location: 'Malappuram, Kerala, India',
    summary: 'Backend engineer specializing in microservices, distributed systems, and banking domain applications. Focused on building scalable, production-ready systems.'
  };

  public readonly projects: { featured: Project, secondary: Project[] } = {
    featured: {
      title: 'E-Commerce Core',
      tag: 'Enterprise Architecture',
      problem: 'A monolithic system unable to handle high-volume distributed transactions during peak sales events securely.',
      solution: 'A highly scalable microservices architecture using Spring Boot, gRPC, and PostgreSQL with an Angular frontend.',
      keyDecision: 'Swapped standard REST for gRPC in inter-service communication to reduce latency by 40% and enforce strict proto-based contracts.',
      link: '#'
    },
    secondary: [
      {
        title: 'Library Core',
        problem: 'Manual, error-prone tracking of thousands of book transactions and user records.',
        solution: 'A centralized Desktop/SQL Server system handling complex relational data operations securely.',
        keyDecision: 'Used complex SQL stored procedures to shift heavy transactional logic from the application to the DB layer for data integrity.',
        link: '#'
      },
      {
        title: 'AI Point Calc',
        problem: 'Thousands of hours wasted manually calculating activity points from raw textual reports.',
        solution: 'An automated NLP pipeline in Python that extracts context and assigns points autonomously.',
        keyDecision: 'Implemented a fallback heuristic scoring system when the NLP confidence threshold dips below 85%.',
        link: '#'
      }
    ]
  };

  public readonly experience: Experience[] = [
    {
      role: 'Software Developer',
      company: 'Interland Technology Service Pvt Ltd',
      duration: '2 YRS 3 MOS | KERALA',
      details: [
        {
          title: 'Enterprise Scalability',
          description: 'Developed and scaled enterprise web applications using Java, Spring Boot, and Angular frameworks to support high user concurrency.'
        },
        {
          title: 'Microservice Architecture',
          description: 'Integrated complex banking services and middleware systems within a strict microservices environment.'
        },
        {
          title: 'Escrow Management',
          description: 'Critical backend role supporting real estate escrow transaction processing for major Saudi banking institutions.'
        }
      ]
    },
    {
      role: 'Technical Consultant',
      company: 'Saudi Investment Bank',
      duration: '4 MOS | ONSITE',
      details: [
        {
          description: 'Deployed onsite to resolve critical production issues, directly supporting operational stability for enterprise bank branches.'
        },
        {
          description: 'Actively contributed to the B2B Middleware System connecting massive core banking endpoints with external corporate clients, guiding multi-team integrations.'
        }
      ]
    }
  ];

  public readonly about: AboutData = {
    paragraphs: [
      'I am a Software Engineer whose core focus is Backend Engineering and System Architecture. Over the last couple of years, my days have been spent deeply embedded in the complexities of enterprise banking applications.',
      'My most challenging and rewarding work involved engineering an Escrow Management System for financial institutions in Saudi Arabia. This wasn\'t just about writing logic; it was about ensuring zero-tolerance for data loss, navigating strict security audits, and constructing solutions that are genuinely scalable under load.',
      'Having worked directly onsite at the Saudi Investment Bank, I gained a profound respect for how software behaves in the wild. I care about writing code that doesn\'t just work locally, but survives the chaos of production environments.'
    ],
    workingOn: 'Deepening my expertise in Event-driven architecture with Kafka and optimizing JVM performance for microservices.',
    learning: 'Exploring Rust for high-performance low-level system design and WebAssembly.',
    focus: ['Resilient APIs', 'High-volume Data Pipelines', 'Clean, maintainable systems']
  };

  getData() {
    return {
      profile: this.profile,
      skills: this.skills,
      projects: this.projects,
      experience: this.experience,
      about: this.about
    };
  }

  constructor() { }
}
