"use client"

import { Server, Box, Shield, Database, Activity, Cloud, Layers } from "lucide-react"

export function ArchitectureDiagram() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Layers className="w-3.5 h-3.5" />
            ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Built for Production
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Self-hosted in your infrastructure. Framework-agnostic. 
            Built on proven open source.
          </p>
        </div>

        {/* Architecture Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          
          {/* PROBLEM: Monolithic */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-destructive/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-xl border border-destructive/20 bg-card/50 p-8">
              <div className="flex items-center gap-2 mb-6 text-destructive">
                 <Server className="w-5 h-5" />
                 <h3 className="font-semibold tracking-tight">The Old Way (Monolithic)</h3>
              </div>
              
              <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Monolithic Container */}
                <rect x="50" y="50" width="300" height="200" rx="12" fill="oklch(0.25 0.1 27)" stroke="oklch(0.577 0.245 27.325)" strokeWidth="2" strokeDasharray="8 8" />
                <text x="200" y="80" textAnchor="middle" fill="oklch(0.577 0.245 27.325)" fontSize="12" fontWeight="600">SINGLE CONTAINER</text>
                
                {/* Agents trapped inside */}
                <g transform="translate(80, 110)">
                   <rect width="60" height="40" rx="6" fill="oklch(0.2 0.05 27)" stroke="oklch(0.577 0.245 27.325)" strokeWidth="1" />
                   <text x="30" y="25" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="10">Res.</text>
                </g>
                <g transform="translate(160, 110)">
                   <rect width="60" height="40" rx="6" fill="oklch(0.2 0.05 27)" stroke="oklch(0.577 0.245 27.325)" strokeWidth="1" />
                   <text x="30" y="25" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="10">Writer</text>
                </g>
                <g transform="translate(240, 110)">
                   <rect width="60" height="40" rx="6" fill="oklch(0.2 0.05 27)" stroke="oklch(0.577 0.245 27.325)" strokeWidth="1" />
                   <text x="30" y="25" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="10">Review</text>
                </g>
                
                {/* EXPLOSION */}
                <path d="M 190 180 L 210 160 L 230 180 L 210 200 Z" fill="oklch(0.6 0.2 27)" className="animate-pulse" />
                <path d="M 200 130 L 140 230 L 260 230 Z" fill="transparent" stroke="oklch(0.6 0.2 27)" strokeWidth="2" />
                <text x="200" y="260" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="14" fontWeight="bold">💥 CRASH = ALL DOWN</text>
              </svg>
            </div>
          </div>

          {/* SOLUTION: Consonant */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
             <div className="relative rounded-xl border border-primary/20 bg-card/50 p-8">
              <div className="flex items-center gap-2 mb-6 text-primary">
                 <Layers className="w-5 h-5" />
                 <h3 className="font-semibold tracking-tight">The Consonant Way</h3>
              </div>
              
              <svg viewBox="0 0 400 300" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                 {/* Control Plane */}
                 <rect x="50" y="20" width="300" height="60" rx="30" fill="oklch(0.2 0.05 240)" stroke="oklch(0.75 0.15 195)" strokeWidth="2" />
                 <text x="200" y="55" textAnchor="middle" fill="oklch(0.75 0.15 195)" fontSize="12" fontWeight="600">CONSONANT CONTROL PLANE</text>
                 
                 {/* Connection Lines */}
                 <path d="M 200 80 L 200 120" stroke="oklch(0.75 0.15 195)" strokeWidth="1" strokeDasharray="4 4" />
                 <path d="M 200 120 L 110 120 L 110 150" stroke="oklch(0.75 0.15 195)" strokeWidth="1" />
                 <path d="M 200 120 L 200 150" stroke="oklch(0.75 0.15 195)" strokeWidth="1" />
                 <path d="M 200 120 L 290 120 L 290 150" stroke="oklch(0.75 0.15 195)" strokeWidth="1" />

                 {/* Independent Pods */}
                 <g transform="translate(80, 150)">
                    <rect width="60" height="80" rx="8" fill="oklch(0.2 0.05 240)" stroke="oklch(0.75 0.15 195)" strokeWidth="2" />
                    <text x="30" y="45" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="10">Res.</text>
                    <circle cx="50" cy="15" r="4" fill="#4ade80" />
                 </g>
                 
                 <g transform="translate(170, 150)">
                    <rect width="60" height="80" rx="8" fill="oklch(0.2 0.05 240)" stroke="oklch(0.577 0.245 27.325)" strokeWidth="2" />
                    <text x="30" y="45" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="10">Writer</text>
                    <path d="M 20 60 L 40 60" stroke="oklch(0.577 0.245 27.325)" strokeWidth="2" />
                    <text x="30" y="75" textAnchor="middle" fill="oklch(0.577 0.245 27.325)" fontSize="8">RESTARTING</text>
                 </g>

                 <g transform="translate(260, 150)">
                    <rect width="60" height="80" rx="8" fill="oklch(0.2 0.05 240)" stroke="oklch(0.75 0.15 195)" strokeWidth="2" />
                    <text x="30" y="45" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="10">Review</text>
                    <circle cx="50" cy="15" r="4" fill="#4ade80" />
                 </g>
                 
                 <text x="200" y="260" textAnchor="middle" fill="oklch(0.9 0 0)" fontSize="14" fontWeight="bold">✅ OTHERS STAY UP</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Technical Stack (Micro) */}
        <div className="max-w-4xl mx-auto border-t border-border pt-12">
          <div className="text-center mb-8">
             <span className="text-sm text-muted-foreground uppercase tracking-wider">Powered by Production Standards</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <TechCard icon={<Box />} title="Kubernetes" desc="Native Runtime" />
             <TechCard icon={<Shield />} title="OPA" desc="Policy Engine" />
             <TechCard icon={<Activity />} title="OpenTelemetry" desc="Observability" />
             <TechCard icon={<Database />} title="PostgreSQL" desc="State Store" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TechCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/30 hover:border-primary/20 transition-colors">
      <div className="text-primary">{icon}</div>
      <div>
        <div className="font-medium text-foreground text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </div>
  )
}
