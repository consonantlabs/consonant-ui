"use client"

import { AlertTriangle, Code2, Database, Gauge, Eye, Shield, Unplug, Workflow } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Unplug,
      title: "No Orchestration Layer",
      description: "Agents operate independently. Coordinating multi-step workflows requires custom code. No standardized way to route between agents at runtime.",
      color: "destructive",
    },
    {
      icon: Code2,
      title: "Hard-Coded Coordination",
      description: "Agent selection lives in application code. Every workflow change means redeployment. Can't adapt based on runtime conditions.",
      color: "destructive",
    },
    {
      icon: Shield,
      title: "No Policy Enforcement",
      description: "Can't enforce approval gates, rate limits, or compliance rules across agents. Each handles constraints differently—or not at all.",
      color: "destructive",
    },
    {
      icon: Database,
      title: "Scattered State",
      description: "Execution history fragmented across systems. No unified trace. Debugging multi-agent workflows is impossible.",
      color: "destructive",
    },
    {
      icon: Eye,
      title: "No Operational Controls",
      description: "Can't pause workflows. Can't replay for debugging. No approval gates. Manual intervention when failures occur.",
      color: "destructive",
    },
    {
      icon: Gauge,
      title: "Inconsistent Reliability",
      description: "Retry logic, backoff strategies, and fallbacks implemented per-agent. No standardized failure handling.",
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
            AI Agents Are Moving to Production.
            <br />
            <span className="text-muted-foreground">Coordination Isn't.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Agent workflows lack orchestration infrastructure. Teams build brittle glue code 
            that breaks under production load and fails compliance audits.
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
                {/* Icon */}
                <div className="w-11 h-11 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center mb-4 group-hover:border-destructive/40 transition-colors">
                  <problem.icon className="w-5 h-5 text-destructive/80" />
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
