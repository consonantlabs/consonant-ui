"use client"

import { useState } from "react"
import { Building2, Heart, Server, Shield, ChevronRight, Check, ArrowRight } from "lucide-react"

export function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(0)
  
  const useCases = [
    {
      icon: Building2,
      industry: "Financial Services",
      title: "Regulatory Compliance for AI Trading",
      challenge: "Regulatory compliance for AI-driven trading and fraud detection agents requires complete audit trails and approval workflows for high-value transactions.",
      solution: "Complete audit trails with cryptographic signatures, automatic approval workflows for high-value transactions, policy enforcement for SOC2/PCI-DSS compliance.",
      outcome: "Pass compliance audits with verifiable evidence",
      metrics: ["100% audit coverage", "Zero policy bypasses", "<30s approval latency"],
    },
    {
      icon: Heart,
      industry: "Healthcare",
      title: "HIPAA-Compliant AI Agents",
      challenge: "AI agents accessing patient data must comply with HIPAA requirements for access controls, audit trails, and data handling.",
      solution: "Data sovereignty with self-hosted deployment, physician identity verification before PHI access, complete audit trails for all patient data interactions.",
      outcome: "Deploy AI agents with zero compliance violations",
      metrics: ["HIPAA compliant", "BAA support", "PHI audit trails"],
    },
    {
      icon: Server,
      industry: "SaaS / Infrastructure",
      title: "Multi-Cluster Agent Orchestration",
      challenge: "Coordinate diagnostic and remediation agents across multiple Kubernetes clusters with operational visibility and control.",
      solution: "Multi-cluster orchestration with regional routing, operational controls (pause, replay, approve), OpenTelemetry-based distributed tracing.",
      outcome: "3-minute incident response vs 30 minutes manually",
      metrics: ["10x faster MTTR", "Multi-region", "Full observability"],
    },
    {
      icon: Shield,
      industry: "Government / Defense",
      title: "Classified Data Processing",
      challenge: "Strict chain of custody requirements for classified data processing with air-gapped deployment and local models.",
      solution: "Air-gapped deployment with no external dependencies, local LLM support, complete audit trails with cryptographic verification.",
      outcome: "FedRAMP High / DoD IL5 ready",
      metrics: ["Air-gapped", "Local models", "Full audit chain"],
    },
  ]

  const activeUseCase = useCases[activeCase]

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-background via-secondary/[0.03] to-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Building2 className="w-3.5 h-3.5" />
            USE CASES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Built for Regulated Industries
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Consonant's governance and auditability features make it ideal for 
            industries with strict compliance requirements.
          </p>
        </div>

        {/* Use Case Tabs + Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Tabs */}
          <div className="space-y-3">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                  activeCase === index
                    ? "border-primary/50 bg-primary/5"
                    : "border-border bg-card/30 hover:border-primary/30"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    activeCase === index 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary/50 text-muted-foreground group-hover:text-primary"
                  }`}>
                    <useCase.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-medium transition-colors ${
                      activeCase === index ? "text-primary" : "text-foreground"
                    }`}>
                      {useCase.industry}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">{useCase.title}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-all ${
                    activeCase === index 
                      ? "text-primary" 
                      : "text-muted-foreground opacity-0 group-hover:opacity-100"
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden h-full">
              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <activeUseCase.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-primary font-medium">{activeUseCase.industry}</p>
                    <h3 className="text-xl font-semibold text-foreground">{activeUseCase.title}</h3>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Challenge</h4>
                  <p className="text-foreground">{activeUseCase.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">How Consonant Helps</h4>
                  <p className="text-muted-foreground">{activeUseCase.solution}</p>
                </div>

                {/* Outcome */}
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Outcome</span>
                  </div>
                  <p className="text-foreground font-medium">{activeUseCase.outcome}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2">
                  {activeUseCase.metrics.map((metric, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-xs text-muted-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
