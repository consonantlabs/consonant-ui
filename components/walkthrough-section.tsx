"use client"

import { Play, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react"

export function WalkthroughSection() {
  return (
    <section className="py-24 px-6 bg-card border-y border-border">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                    <Play className="w-3 h-3 fill-current" />
                    LIVE DEMO SCENARIO
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                    See It In Action: <br />
                    <span className="text-primary">Black Friday Database Crisis</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A real-world incident that would take 30 minutes to fix manually.
                    <br />
                    Consonant solves it in <span className="text-foreground font-bold underline decoration-primary decoration-4 underline-offset-4">1 minute</span>.
                </p>
                <div className="flex gap-8 mt-8">
                    <div>
                         <div className="text-3xl font-bold text-foreground">60s</div>
                         <div className="text-sm text-muted-foreground">Time to Resolution</div>
                    </div>
                    <div className="h-12 w-px bg-border" />
                    <div>
                         <div className="text-3xl font-bold text-green-500">$49K</div>
                         <div className="text-sm text-muted-foreground">Revenue Saved</div>
                    </div>
                     <div className="h-12 w-px bg-border" />
                    <div>
                         <div className="text-3xl font-bold text-blue-500">1</div>
                         <div className="text-sm text-muted-foreground">Agents Affected</div>
                    </div>
                </div>
            </div>

            {/* Timeline Visual */}
            <div className="flex-1 w-full bg-background rounded-2xl border border-border/50 shadow-2xl p-8 relative overflow-hidden">
                <div className="space-y-8 relative z-10">
                    
                    {/* Event 1 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">0:00</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-500/20" />
                            <div className="w-px h-full bg-border absolute left-1.5 top-3" />
                        </div>
                        <div className="pb-4">
                            <div className="font-bold text-red-400">Incident Detected</div>
                            <div className="text-sm text-muted-foreground">Engineer submits: "Database slow, fix urgently"</div>
                        </div>
                    </div>

                     {/* Event 2 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">0:01</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-blue-500" />
                            <div className="w-px h-full bg-border absolute left-1.5 top-3" />
                        </div>
                        <div className="pb-4">
                            <div className="font-bold">Intelligence Routing</div>
                            <div className="text-sm text-muted-foreground">Routes to <code className="bg-muted px-1 rounded">db-diagnostic-agent</code></div>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">0:10</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-purple-500" />
                            <div className="w-px h-full bg-border absolute left-1.5 top-3" />
                        </div>
                        <div className="pb-4">
                            <div className="font-bold">Policy Check</div>
                            <div className="text-sm text-muted-foreground">Emergency protocol approved (SOC2 logged)</div>
                        </div>
                    </div>

                    {/* Event 4 */}
                    <div className="flex gap-4">
                        <div className="w-12 text-right font-mono text-sm text-muted-foreground pt-1">0:25</div>
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div>
                            <div className="font-bold text-green-500">Remediation Complete</div>
                            <div className="text-sm text-muted-foreground">Database connections scaled 100 &rarr; 250</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

       

      </div>
    </section>
  )
}
