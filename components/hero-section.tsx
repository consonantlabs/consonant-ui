"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Play, Sparkles, Cpu, Shield, Eye } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/5 text-destructive text-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>Production AI Systems Are Breaking</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-up delay-100">
          <span className="block">Your AI agents crash together</span>
          <span className="block text-gradient-primary">because they're stuck in the same container</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          <span className="text-foreground font-medium">Consonant separates them.</span> Each agent runs independently, 
          scales on its own, and fails without taking down your entire system. Built on Kubernetes, works with any framework, 
          enforces policies automatically.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6 animate-fade-in-up delay-300">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base glow-border group">
            <a href="https://forms.gle/zdJF2e2pDhcN7aLX7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              Try Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base border-border hover:border-primary/50 hover:bg-primary/5">
            <a href="/docs" className="flex items-center gap-2">
              View Docs
            </a>
          </Button>
        </div>
        
        {/* Social Proof */}
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up delay-400">
          <a 
            href="https://github.com/consonant-ai/consonant" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Star on GitHub</span>
          </a>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span>Open Source</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
          <span>Built on KAgent + Kubernetes</span>
        </div>
        
        {/* Hero Diagram */}
        <div className="mt-20 relative animate-fade-in-up delay-500">
          <OrchestratorDiagram />
        </div>
      </div>
    </section>
  )
}

function OrchestratorDiagram() {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Glow behind the diagram */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl" />
      
      <div className="relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/5">
        {/* Terminal Header */}
        <div className="h-10 bg-secondary/50 border-b border-border flex items-center gap-2 px-4">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-chart-4/60" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="text-xs text-muted-foreground ml-4 font-mono">consonant orchestrator</span>
        </div>
        
        {/* Diagram Content */}
        <div className="p-8 md:p-12">
          <svg viewBox="0 0 800 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid Background */}
            <defs>
              <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="oklch(0.25 0.01 240)" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
              <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.75 0.15 195)" />
                <stop offset="100%" stopColor="oklch(0.55 0.25 290)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <rect width="800" height="400" fill="url(#heroGrid)" />
            
            {/* User/Goal Node */}
            <g className="animate-float" style={{ animationDelay: '0s' }}>
              <rect x="30" y="160" width="140" height="80" rx="12" fill="oklch(0.18 0.01 240)" stroke="oklch(0.30 0.01 240)" strokeWidth="1.5"/>
              <text x="100" y="195" textAnchor="middle" fill="oklch(0.65 0 0)" fontSize="11" fontFamily="monospace">GOAL</text>
              <text x="100" y="218" textAnchor="middle" fill="oklch(0.985 0 0)" fontSize="13" fontWeight="500">"Fix database"</text>
            </g>
            
            {/* Flow Line 1 */}
            <path d="M 170 200 L 250 200" stroke="url(#primaryGradient)" strokeWidth="2" strokeDasharray="6,6" className="animate-dash-flow" filter="url(#glow)"/>
            <circle cx="250" cy="200" r="4" fill="oklch(0.75 0.15 195)" className="animate-pulse"/>
            
            {/* Consonant Control Plane */}
            <g className="animate-float" style={{ animationDelay: '0.5s' }}>
              <rect x="270" y="100" width="260" height="200" rx="16" fill="oklch(0.12 0.02 220)" stroke="oklch(0.75 0.15 195)" strokeWidth="2" filter="url(#glow)"/>
              <text x="400" y="135" textAnchor="middle" fill="oklch(0.75 0.15 195)" fontSize="14" fontWeight="600">CONSONANT CONTROL PLANE</text>
              
              {/* Internal Components */}
              <rect x="290" y="155" width="100" height="45" rx="8" fill="oklch(0.18 0.01 240)" stroke="oklch(0.30 0.01 240)" strokeWidth="1"/>
              <text x="340" y="183" textAnchor="middle" fill="oklch(0.985 0 0)" fontSize="11">🧠 Planner</text>
              
              <rect x="410" y="155" width="100" height="45" rx="8" fill="oklch(0.18 0.01 240)" stroke="oklch(0.30 0.01 240)" strokeWidth="1"/>
              <text x="460" y="183" textAnchor="middle" fill="oklch(0.985 0 0)" fontSize="11">🛡️ Policy</text>
              
              <rect x="350" y="220" width="100" height="45" rx="8" fill="oklch(0.18 0.01 240)" stroke="oklch(0.30 0.01 240)" strokeWidth="1"/>
              <text x="400" y="248" textAnchor="middle" fill="oklch(0.985 0 0)" fontSize="11">📊 State</text>
            </g>
            
            {/* Flow Line 2 */}
            <path d="M 530 200 L 580 200 L 580 120 M 580 200 L 580 280" stroke="url(#primaryGradient)" strokeWidth="2" strokeDasharray="6,6" className="animate-dash-flow" filter="url(#glow)"/>
            
            {/* Agent Nodes */}
            <g className="animate-float" style={{ animationDelay: '1s' }}>
              <rect x="620" y="70" width="150" height="60" rx="10" fill="oklch(0.18 0.01 240)" stroke="oklch(0.55 0.25 290)" strokeWidth="1.5"/>
              <text x="695" y="95" textAnchor="middle" fill="oklch(0.55 0.25 290)" fontSize="10">DIAGNOSTIC</text>
              <text x="695" y="115" textAnchor="middle" fill="oklch(0.985 0 0)" fontSize="12">K8s Agent</text>
            </g>
            
            <g className="animate-float" style={{ animationDelay: '1.2s' }}>
              <rect x="620" y="170" width="150" height="60" rx="10" fill="oklch(0.18 0.01 240)" stroke="oklch(0.55 0.25 290)" strokeWidth="1.5"/>
              <text x="695" y="195" textAnchor="middle" fill="oklch(0.55 0.25 290)" fontSize="10">REMEDIATION</text>
              <text x="695" y="215" textAnchor="middle" fill="oklch(0.985 0 0)" fontSize="12">DB Agent</text>
            </g>
            
            <g className="animate-float" style={{ animationDelay: '1.4s' }}>
              <rect x="620" y="270" width="150" height="60" rx="10" fill="oklch(0.18 0.01 240)" stroke="oklch(0.55 0.25 290)" strokeWidth="1.5"/>
              <text x="695" y="295" textAnchor="middle" fill="oklch(0.55 0.25 290)" fontSize="10">NOTIFICATION</text>
              <text x="695" y="315" textAnchor="middle" fill="oklch(0.985 0 0)" fontSize="12">Slack Agent</text>
            </g>
            
            {/* Connect lines to agents */}
            <circle cx="620" cy="100" r="3" fill="oklch(0.55 0.25 290)" className="animate-pulse"/>
            <circle cx="620" cy="200" r="3" fill="oklch(0.55 0.25 290)" className="animate-pulse"/>
            <circle cx="620" cy="300" r="3" fill="oklch(0.55 0.25 290)" className="animate-pulse"/>
            
            {/* Labels */}
            <text x="210" y="185" textAnchor="middle" fill="oklch(0.50 0 0)" fontSize="10">submit</text>
            <text x="560" y="145" textAnchor="middle" fill="oklch(0.50 0 0)" fontSize="10">orchestrate</text>
          </svg>
        </div>
        
        {/* Feature Pills */}
        <div className="px-8 pb-8 flex flex-wrap justify-center gap-3">
          <FeaturePill icon={<Cpu className="w-4 h-4" />} label="Goal-Driven Orchestration" />
          <FeaturePill icon={<Shield className="w-4 h-4" />} label="Policy Enforcement" />
          <FeaturePill icon={<Eye className="w-4 h-4" />} label="Complete Observability" />
        </div>
      </div>
    </div>
  )
}

function FeaturePill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/30 text-sm text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors">
      {icon}
      <span>{label}</span>
    </div>
  )
}
