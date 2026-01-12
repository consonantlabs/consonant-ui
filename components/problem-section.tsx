"use client"

import { AlertTriangle, Code2, Database, Gauge, Eye, Shield, Unplug, Workflow } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Blast Radius Disasters",
      metric: "100%",
      description: "One agent crashes → entire system goes down. Your researcher agent has a memory leak? Now your writer, reviewer, and editor agents are dead too. Single failure = total system outage.",
      color: "destructive",
    },
    {
      icon: Database,
      title: "Resource Waste",
      metric: "40%",
      description: "Your researcher needs 2 CPUs. Your editor needs 0.1 CPUs. But they share a container, so you provision 4 CPUs for everything. That's 40% waste you're paying for every hour.",
      color: "destructive",
    },
    {
      icon: Code2,
      title: "Deployment Risk",
      metric: "100%",
      description: "Fixed a typo in your writer agent? Rebuilding the entire container. Redeploying everything. Restarting all agents. Losing in-flight work. A 10-line change has 100% blast radius.",
      color: "destructive",
    },
    {
      icon: Gauge,
      title: "Scaling Hell",
      metric: "90%",
      description: "Your researcher gets 500 requests/hour. Your editor gets 50. But scaling means 5x both. You're running 4.5 unnecessary editor replicas—90% wasted capacity.",
      color: "destructive",
    },
    {
      icon: Unplug,
      title: "Framework Prison",
      metric: "∞",
      description: "All agents must use LangGraph because that's what you started with. New agent built in CrewAI? Can't use it. Vendor agent in AutoGen? Incompatible. You're locked in forever.",
      color: "destructive",
    },
  ]

  return (
    <section className="py-28 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-destructive/3 rounded-full blur-[150px] -translate-y-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-destructive/30 bg-destructive/5 text-destructive text-xs font-medium mb-6">
            <AlertTriangle className="w-3.5 h-3.5" />
            THE PROBLEM
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            The Multi-Agent Production Problem
            <br />
            <span className="text-muted-foreground">Nobody Talks About</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            When companies deploy multiple AI agents to production, they hit catastrophic failure modes 
            because agents are deployed as monolithic containers. This creates cascading disasters.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm hover:border-destructive/40 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                {/* Icon and Metric */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center group-hover:border-destructive/40 transition-colors">
                    <problem.icon className="w-5 h-5 text-destructive/80" />
                  </div>
                  <div className="px-2.5 py-1 rounded-md bg-destructive/10 border border-destructive/20">
                    <span className="text-destructive font-mono text-sm font-bold">{problem.metric}</span>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground transition-colors">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-secondary/20 text-muted-foreground">
            <Workflow className="w-5 h-5 text-primary" />
            <span>Consonant solves this with <span className="text-primary font-medium">infrastructure-grade orchestration</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
