"use client"

import { Clock, AlertOctagon, TrendingDown, Frown, DollarSign } from "lucide-react"

export function DisasterSection() {
  return (
    <section className="py-24 px-6 bg-red-950/20 border-y border-red-900/20 relative overflow-hidden">
        {/* Background Alert Accents */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-mono">
                THE 2 AM DISASTER
            </h2>
            <p className="text-xl text-red-400 font-medium">
                How One Agent Takes Down Your Business
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Timeline */}
            <div className="relative border-l-2 border-red-900/50 pl-8 space-y-12 py-4">
                {/* 2:00 AM */}
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-red-900 border-2 border-red-500 z-10" />
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-red-400 font-mono font-bold">02:00 AM</span>
                        <h3 className="font-bold text-lg">Fraud detection agent memory leak</h3>
                    </div>
                </div>

                {/* 2:15 AM */}
                <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-red-900 border-2 border-red-500 z-10" />
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-red-400 font-mono font-bold">02:15 AM</span>
                        <h3 className="font-bold text-lg">Consumes all 16GB RAM</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">The node is now under extreme pressure. Other pods are being starved.</p>
                </div>

                {/* 2:16 AM Impact */}
                <div className="relative">
                    <div className="absolute -left-[45px] top-0 w-7 h-7 rounded-full bg-red-600 animate-pulse z-10 flex items-center justify-center">
                        <AlertOctagon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-red-500 font-mono font-bold">02:16 AM</span>
                        <h3 className="font-bold text-xl text-red-500">Kubernetes kills the pod</h3>
                    </div>
                    <div className="space-y-3 mt-4 bg-red-950/30 p-4 rounded-lg border border-red-900/50">
                        <div className="flex items-center gap-3 text-red-300">
                             <TrendingDown className="w-4 h-4" />
                             <span>Your refund agent: <span className="font-bold text-red-500">DEAD</span></span>
                        </div>
                        <div className="flex items-center gap-3 text-red-300">
                             <TrendingDown className="w-4 h-4" />
                             <span>Your inventory agent: <span className="font-bold text-red-500">DEAD</span></span>
                        </div>
                         <div className="flex items-center gap-3 text-red-300">
                             <TrendingDown className="w-4 h-4" />
                             <span>Your order agent: <span className="font-bold text-red-500">DEAD</span></span>
                        </div>
                        <div className="h-px bg-red-800/50 my-2" />
                        <div className="font-bold text-red-500 text-lg uppercase tracking-wider">
                            💥 ENTIRE BUSINESS OFFLINE
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT: The Math */}
            <div className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-primary" />
                    The Cost of Chaos
                </h3>
                
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Blast Radius</span>
                        <span className="font-mono font-bold text-xl text-red-500">100%</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Downtime</span>
                        <span className="font-mono font-bold text-xl">45 minutes</span>
                        <span className="text-xs text-muted-foreground">(until you wake up)</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-red-500/20">
                        <span className="text-muted-foreground">Revenue Lost</span>
                        <div className="text-right">
                             <span className="font-mono font-bold text-xl text-red-500">$18,750</span>
                             <div className="text-xs text-muted-foreground">at $25K/hour</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <span className="text-muted-foreground">Customer Trust</span>
                        <span className="font-bold text-red-400">Damaged</span>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                         <span className="text-muted-foreground">CTO Sleep</span>
                         <span className="font-bold text-red-400">Ruined</span>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border text-center">
                    <p className="text-lg font-medium italic mb-2">
                        "This happened to you last quarter."
                    </p>
                    <p className="text-muted-foreground">
                        You called it 'an incident'. <br/>
                        We call it <span className="text-foreground font-bold">'predictable architectural failure'</span>.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
