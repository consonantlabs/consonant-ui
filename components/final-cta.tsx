"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Main Content */}
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Ready to orchestrate
          <br />
          <span className="text-gradient-primary">your AI agents?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Deploy in your infrastructure. Keep your data sovereign. 
          Start with the open source core, upgrade when you need to.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base glow-border group w-full sm:w-auto">
            <Link href="/docs" className="flex items-center gap-2">
              View Documentation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base border-border hover:border-primary/50 w-full sm:w-auto">
            <a 
              href="https://github.com/consonant-ai/consonant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              Star on GitHub
            </a>
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span>Self-hosted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span>Open source core</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span>Data sovereignty</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span>SOC2 ready</span>
          </div>
        </div>
        
        {/* Enterprise Contact */}
        <div className="mt-12 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm inline-block">
          <p className="text-sm text-muted-foreground mb-3">
            Need enterprise features? Multi-cluster deployment? Dedicated support?
          </p>
          <a 
            href="https://forms.gle/zdJF2e2pDhcN7aLX7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Request an enterprise demo
          </a>
        </div>
      </div>
    </section>
  )
}
