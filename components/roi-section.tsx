"use client"

import { TrendingUp, Clock, ShieldCheck, ArrowUpRight } from "lucide-react"

export function ROISection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                The ROI: What You Actually Save
            </h2>
             <p className="text-muted-foreground max-w-2xl mx-auto text-lg/relaxed">
                Consonant pays for itself in infrastructure savings alone.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Cost Savings */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="font-bold text-green-400 tracking-wider text-sm uppercase">Cost Savings</div>
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">$2M/year</div>
                <div className="text-xl font-medium mb-6">Resource Optimization</div>
                <p className="text-muted-foreground leading-relaxed">
                    Stop over-provisioning for worst-case scenarios. Right-size every agent.
                    <span className="block mt-4 text-green-400 text-sm font-medium">Verified by docs &rarr;</span>
                </p>
            </div>

            {/* Velocity */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20">
                <div className="flex items-center gap-4 mb-6">
                     <div className="p-3 bg-blue-500/20 rounded-lg">
                        <Clock className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="font-bold text-blue-400 tracking-wider text-sm uppercase">Velocity</div>
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">3x Faster</div>
                <div className="text-xl font-medium mb-6">Feature Shipping</div>
                <p className="text-muted-foreground leading-relaxed">
                    Deploy agents independently. Updates take 2 minutes, not 20 minutes wait time.
                    <span className="block mt-4 text-blue-400 text-sm font-medium">Higher throughput &rarr;</span>
                </p>
            </div>

            {/* Compliance */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                     <div className="p-3 bg-purple-500/20 rounded-lg">
                        <ShieldCheck className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="font-bold text-purple-400 tracking-wider text-sm uppercase">Compliance</div>
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">SOC2 Ready</div>
                <div className="text-xl font-medium mb-6">Out of the Box</div>
                <p className="text-muted-foreground leading-relaxed">
                    Built-in policy engine and complete audit trails for every agent action.
                    <span className="block mt-4 text-purple-400 text-sm font-medium">Audit ready &rarr;</span>
                </p>
            </div>
        </div>
      </div>
    </section>
  )
}
