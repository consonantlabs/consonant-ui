"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Mail, Terminal, Shield, LineChart } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Start shipping <span className="text-gradient-primary">production agents</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your path to production. Open source core, enterprise governance.
          </p>
        </div>

        {/* 3 User Paths */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Path 1: Developers */}
          <div className="relative group rounded-xl border border-border bg-card/50 p-6 hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                   <Terminal className="w-5 h-5" />
                 </div>
                 <h3 className="font-semibold text-lg">Developers</h3>
               </div>
               
               <div className="bg-secondary/50 rounded-lg p-3 font-mono text-xs text-muted-foreground mb-4 overflow-x-auto border border-border">
                 <div>helm install consonant</div>
                 <div className="mt-1">kubectl apply -f agent.yaml</div>
                 <div className="mt-1 text-primary">consonant run --goal "test"</div>
               </div>
               
               <Button variant="outline" className="w-full justify-between" asChild>
                 <Link href="/docs/quickstart">
                   Try Locally
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
               </Button>
            </div>
          </div>

          {/* Path 2: Platform Teams */}
          <div className="relative group rounded-xl border border-border bg-card/50 p-6 hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                   <Shield className="w-5 h-5" />
                 </div>
                 <h3 className="font-semibold text-lg">Platform Teams</h3>
               </div>
               
               <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Multi-cluster support</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Policy enforcement (OPA)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Complete observability</li>
               </ul>
               
               <Button variant="outline" className="w-full justify-between" asChild>
                 <Link href="/docs/architecture">
                   View Architecture
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
               </Button>
            </div>
          </div>

          {/* Path 3: Executives */}
          <div className="relative group rounded-xl border border-border bg-card/50 p-6 hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            <div className="relative">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                   <LineChart className="w-5 h-5" />
                 </div>
                 <h3 className="font-semibold text-lg">Executives</h3>
               </div>
               
               <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />40% infrastructure savings</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />SOC2 compliance ready</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" />Zero vendor lock-in</li>
               </ul>
               
               <Button variant="outline" className="w-full justify-between" asChild>
                 <a href="https://forms.gle/zdJF2e2pDhcN7aLX7" target="_blank" rel="noopener noreferrer">
                   Schedule Demo
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </a>
               </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-8 text-sm text-muted-foreground">
           <a href="https://github.com/consonant-ai/consonant" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
           <Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link>
           <a href="mailto:team@consonant.ai" className="hover:text-foreground transition-colors">Contact Sales</a>
        </div>
      </div>
    </section>
  )
}
