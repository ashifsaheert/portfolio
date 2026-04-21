import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="py-32 relative bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-white/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="mb-20 text-center" appScrollReveal="reveal-up">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white tracking-tight">Case <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">Study</span></h2>
          <div class="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-500 mt-6 mx-auto rounded-full"></div>
          <p class="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-medium">Deep Dive: Enterprise E-Commerce Microservice Platform</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Abstract Graphic/Stats -->
          <div class="lg:col-span-4 space-y-8" appScrollReveal="reveal-left">
            <div class="glass-card rounded-3xl p-8 bg-green-50/50 dark:bg-transparent">
              <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-6">Project Overview</h3>
              <ul class="space-y-4 text-sm font-medium">
                <li class="flex justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span class="text-slate-500">Domain</span>
                  <span class="text-slate-800 dark:text-white font-bold">E-Commerce Retailing</span>
                </li>
                <li class="flex justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span class="text-slate-500">Architecture</span>
                  <span class="text-green-600 dark:text-green-400 font-bold">Microservices</span>
                </li>
                <li class="flex justify-between border-b border-slate-200 dark:border-white/10 pb-4">
                  <span class="text-slate-500">Communications</span>
                  <span class="text-slate-800 dark:text-white font-bold">gRPC / REST</span>
                </li>
                <li class="flex justify-between">
                  <span class="text-slate-500">Primary DB</span>
                  <span class="text-slate-800 dark:text-white font-bold">PostgreSQL</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- detailed sections -->
          <div class="lg:col-span-8 space-y-8" appScrollReveal="reveal-right">
            
            <div class="glass-card rounded-3xl p-8 lg:p-10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center font-black">?</div>
                <h3 class="text-2xl font-bold text-slate-800 dark:text-white">The Problem</h3>
              </div>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                A monolithic e-commerce application struggled to handle peak traffic during sales events, resulting in slow product loading times, inventory synchronization failures, and difficult deployment cycles where minor updates required full system downtime.
              </p>
            </div>

            <div class="glass-card rounded-3xl p-8 lg:p-10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 flex items-center justify-center font-black">!</div>
                <h3 class="text-2xl font-bold text-slate-800 dark:text-white">The Solution</h3>
              </div>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Decoupled the application into distinct domain-driven microservices (User Auth, Catalog, Cart, Order, Inventory) using <span class="font-bold text-slate-800 dark:text-white">Java and Spring Boot</span>. Services communicate internally via high-speed <span class="font-bold text-slate-800 dark:text-white">gRPC</span> to ensure extremely low latency on inter-service data transfers, while exposing <span class="font-bold text-slate-800 dark:text-white">REST APIs</span> to the <span class="font-bold text-slate-800 dark:text-white">Angular</span> frontend client.
              </p>
            </div>

            <div class="glass-card rounded-3xl p-8 lg:p-10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-800 dark:text-white">Challenges & Outcome</h3>
              </div>
              <p class="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
                <strong>Challenge:</strong> Maintaining distributed transaction consistency across multiple PostgreSQL databases during the checkout sequence without blocking resources.
              </p>
              <div class="p-6 bg-slate-100 dark:bg-slate-950/50 rounded-2xl border border-slate-200 dark:border-white/5">
                <p class="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  <strong>Outcome:</strong> Implemented Saga Patterns and Event Sourcing via Kafka (planned integration) to handle compensation logic. The resulting infrastructure enables zero-downtime independent service deployments, handles 3x historical traffic loads safely, and reduces average API latency by 45% through gRPC internal networking.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CaseStudy {}
