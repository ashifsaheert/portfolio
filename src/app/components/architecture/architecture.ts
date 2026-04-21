import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal/scroll-reveal';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [ScrollRevealDirective],
  template: `
    <section class="py-32 relative bg-slate-900 border-y border-white/5">
      <!-- Background glow -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[150px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="mb-20 text-center" appScrollReveal="reveal-up">
          <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">System <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Architecture</span></h2>
          <div class="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 mt-6 mx-auto rounded-full"></div>
          <p class="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">My approach to building robust, decoupled backend services visualizing generic API flows and microservice communication.</p>
        </div>

        <!-- Arch Diagram -->
        <div class="glass-card rounded-3xl p-8 lg:p-16 border border-cyan-500/20" appScrollReveal="reveal-up">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <!-- Client Layer -->
            <div class="flex flex-col items-center gap-4 flex-1">
              <h4 class="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">Client Layer</h4>
              <div class="w-32 h-20 bg-slate-800 border-2 border-slate-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">Web App</div>
              <div class="w-32 h-20 bg-slate-800 border-2 border-slate-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">Mobile / B2B</div>
            </div>

            <!-- API Gateway -->
            <div class="hidden lg:flex flex-col items-center justify-center">
              <svg class="w-16 h-16 text-slate-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </div>

            <div class="flex flex-col items-center gap-4 flex-1 w-full lg:w-auto">
              <h4 class="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-4">API Gateway / Auth</h4>
              <div class="w-full h-48 lg:h-56 bg-slate-800/80 border-2 border-cyan-500/50 rounded-2xl flex flex-col items-center justify-center text-white font-bold relative shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <span class="text-xl">Spring Cloud Gateway</span>
                <span class="text-sm text-cyan-400 mt-2">OAuth2 / JWT / Routing</span>
              </div>
            </div>

            <!-- Services -->
            <div class="hidden lg:flex flex-col items-center justify-center">
               <svg class="w-16 h-16 text-cyan-500 animate-[pulse_2s_ease-in-out_infinite]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </div>

            <div class="flex flex-col items-center gap-4 flex-1 w-full lg:w-auto">
              <h4 class="text-purple-400 font-bold tracking-widest uppercase text-sm mb-4">Microservices</h4>
              <div class="grid grid-cols-2 gap-4 w-full">
                <div class="h-24 bg-slate-800 border-2 border-purple-500/80 rounded-xl flex flex-col items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <span>Service A</span><span class="text-xs text-purple-400 font-normal">Java App</span>
                </div>
                <div class="h-24 bg-slate-800 border-2 border-purple-500/80 rounded-xl flex flex-col items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <span>Service B</span><span class="text-xs text-purple-400 font-normal">Java App</span>
                </div>
                <!-- gRPC text across -->
                <div class="col-span-2 text-center text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
                  <span>---</span> gRPC Internal <span>---</span>
                </div>
                <div class="h-24 bg-slate-800 border-2 border-purple-500/80 rounded-xl flex flex-col items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <span>Service C</span><span class="text-xs text-purple-400 font-normal">Python App</span>
                </div>
                <div class="h-24 bg-slate-800 border-2 border-purple-500/80 rounded-xl flex flex-col items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                  <span>Database</span><span class="text-xs text-purple-400 font-normal">PostgreSQL</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class Architecture {}
