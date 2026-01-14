"use client"

import { Clock, AlertOctagon, TrendingDown, Frown, DollarSign } from "lucide-react"

export function DisasterSection() {
  return (
    <section className="py-24 px-6 bg-destructive/5 border-y border-destructive/10 relative overflow-hidden">
        {/* Background Alert Accents */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-destructive/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-mono tracking-tight">
                WHAT BREAKS WHEN YOU SHIP <br className="hidden md:block" />
                MULTI-AGENT SYSTEMS
            </h2>
            <p className="text-xl text-destructive font-medium opacity-90">
                Infrastructure failure is the #1 killer of agent reliability.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Engineering Failure Flow */}
            <div className="relative border-l border-destructive/20 pl-8 space-y-12 py-4">
                {/* Latency Spike */}
                <div className="relative">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-background border border-destructive z-10 shadow-[0_0_10px_rgba(var(--destructive),0.5)]" />
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-destructive font-mono text-sm font-bold">0ms</span>
                        <h3 className="font-bold text-lg">Minor Latency Spike</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">A vector database or external tool slows down by 200ms.</p>
                </div>

                {/* Retry Loop */}
                <div className="relative">
                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-background border border-destructive z-10 shadow-[0_0_10px_rgba(var(--destructive),0.5)]" />
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-destructive font-mono text-sm font-bold">5s</span>
                        <h3 className="font-bold text-lg">Unbounded Retry Loop</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">Agent A enters a loop, recursively calling tools while consuming 90% CPU.</p>
                </div>

                {/* Blast Radius */}
                <div className="relative">
                    <div className="absolute -left-[45px] top-[-4px] w-8 h-8 rounded-full bg-destructive flex items-center justify-center z-10 glow-destructive animate-pulse">
                        <AlertOctagon className="w-5 h-5 text-destructive-foreground" />
                    </div>
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-destructive font-mono font-bold">12s</span>
                        <h3 className="font-bold text-xl text-destructive">Shared process OOMs</h3>
                    </div>
                    <div className="space-y-3 mt-4 bg-destructive/5 p-5 rounded-xl border border-destructive/10 backdrop-blur-sm">
                        <div className="flex items-center gap-3 text-muted-foreground">
                             <TrendingDown className="w-4 h-4 text-destructive/70" />
                             <span>Agent A OOMs → <span className="font-bold text-destructive">ALL AGENTS DIE</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                             <TrendingDown className="w-4 h-4 text-destructive/70" />
                             <span>Retry loops <span className="font-bold text-destructive">AMPLIFY FAILURES</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                             <TrendingDown className="w-4 h-4 text-destructive/70" />
                             <span>Tool dependency <span className="font-bold text-destructive">STALLS ENTIRE SYSTEM</span></span>
                        </div>
                        <div className="h-px bg-destructive/10 my-3" />
                        <div className="font-bold text-destructive text-sm uppercase tracking-[0.2em]">
                            💥 PRODUCTION DEPLOYMENT FROZEN
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: The Metrics */}
            <div className="bg-card/30 backdrop-blur-md border border-border/50 p-8 rounded-2xl shadow-2xl relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <AlertOctagon className="w-24 h-24 text-destructive" />
                </div>
                
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive" />
                    Engineering Impact Analysis
                </h3>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                        <span className="text-sm text-muted-foreground">Blast Radius</span>
                        <span className="font-mono font-bold text-destructive">100% Shared Fate</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                        <span className="text-sm text-muted-foreground">Resource Coupling</span>
                        <span className="font-mono font-bold text-destructive/80">Waste Math</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                        <span className="text-sm text-muted-foreground">Cost Explosion</span>
                        <div className="text-right">
                             <span className="font-mono font-bold text-destructive">Recursive Tool Burn</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                        <span className="text-sm text-muted-foreground">Iteration Speed</span>
                        <span className="text-destructive/80 font-bold">Locked to Monolith</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
                         <span className="text-sm text-muted-foreground">Observability</span>
                         <span className="text-destructive/80 font-bold">Impossible (No isolation)</span>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                    <p className="text-lg font-medium italic mb-2">
                        "Your agents are one memory leak away from a total system outage."
                    </p>
                    <p className="text-muted-foreground">
                        Stop deploying agents as scripts. <br/>
                        Start deploying them as <span className="text-foreground font-bold">isolated, managed services</span>.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
