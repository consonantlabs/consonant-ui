"use client"

import { Server, Box, Shield, Database, Activity, Cloud, Layers } from "lucide-react"

export function ArchitectureDiagram() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Layers className="w-3.5 h-3.5" />
            ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Built for Production
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Self-hosted in your infrastructure. Framework-agnostic. 
            Built on proven open source.
          </p>
        </div>

        {/* Architecture Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Architecture Stack */}
            <div className="space-y-4">
              
              {/* Layer 1: Control Plane */}
              <div className="relative">
                <ArchitectureLayer
                  title="Consonant Control Plane"
                  subtitle="Orchestration + Policy + State"
                  color="primary"
                  icon={<Server className="w-5 h-5" />}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <ComponentBox 
                      name="API Layer" 
                      tech="TypeScript/Node.js" 
                      icon={<Activity className="w-4 h-4" />}
                    />
                    <ComponentBox 
                      name="Intelligence" 
                      tech="LangGraph" 
                      icon={<Box className="w-4 h-4" />}
                    />
                    <ComponentBox 
                      name="Policy Engine" 
                      tech="OPA/Rego" 
                      icon={<Shield className="w-4 h-4" />}
                    />
                    <ComponentBox 
                      name="State Store" 
                      tech="PostgreSQL" 
                      icon={<Database className="w-4 h-4" />}
                    />
                  </div>
                </ArchitectureLayer>
                
                {/* Connection lines */}
                <div className="absolute left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-primary/50 to-accent/50" />
              </div>
              
              {/* Layer 2: Agent Runtime */}
              <div className="relative">
                <ArchitectureLayer
                  title="Your Agents (Any Framework)"
                  subtitle="Independent, Framework-Agnostic Agents"
                  color="accent"
                  icon={<Box className="w-5 h-5" />}
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <AgentBox name="LangChain Agent" />
                    <AgentBox name="AutoGen Agent" />
                    <AgentBox name="CrewAI Agent" />
                    <AgentBox name="Custom Agent" />
                  </div>
                </ArchitectureLayer>
                
                {/* Connection lines */}
                <div className="absolute left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-accent/50 to-muted-foreground/30" />
              </div>
              
              {/* Layer 3: Infrastructure */}
              <ArchitectureLayer
                title="Your Infrastructure"
                subtitle="Kubernetes / Cloud / On-Premise"
                color="muted"
                icon={<Cloud className="w-5 h-5" />}
              >
                <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                  <InfraTag>AWS EKS</InfraTag>
                  <InfraTag>GKE</InfraTag>
                  <InfraTag>Azure AKS</InfraTag>
                  <InfraTag>On-Premise K8s</InfraTag>
                  <InfraTag>Air-Gapped</InfraTag>
                </div>
              </ArchitectureLayer>
            </div>
          </div>
          
          {/* Key Points */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <KeyPoint
              icon={<Shield className="w-5 h-5" />}
              title="Data Sovereignty"
              description="All data stays in your infrastructure. Self-hosted control plane."
            />
            <KeyPoint
              icon={<Box className="w-5 h-5" />}
              title="Framework Agnostic"
              description="Works with any agent framework. No vendor lock-in."
            />
            <KeyPoint
              icon={<Activity className="w-5 h-5" />}
              title="Proven OSS Stack"
              description="Built on LangGraph, OPA, OpenTelemetry, and Kubernetes."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ArchitectureLayer({ 
  title, 
  subtitle, 
  color, 
  icon, 
  children 
}: { 
  title: string
  subtitle: string
  color: "primary" | "accent" | "muted"
  icon: React.ReactNode
  children: React.ReactNode
}) {
  const colorClasses = {
    primary: "border-primary/40 bg-primary/5",
    accent: "border-accent/40 bg-accent/5",
    muted: "border-border bg-secondary/20",
  }
  
  const iconClasses = {
    primary: "text-primary",
    accent: "text-accent",
    muted: "text-muted-foreground",
  }
  
  return (
    <div className={`rounded-xl border p-6 ${colorClasses[color]}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className={iconClasses[color]}>{icon}</div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

function ComponentBox({ name, tech, icon }: { name: string; tech: string; icon: React.ReactNode }) {
  return (
    <div className="p-3 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-colors group">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</span>
        <span className="text-sm font-medium text-foreground">{name}</span>
      </div>
      <span className="text-xs text-muted-foreground">{tech}</span>
    </div>
  )
}

function AgentBox({ name }: { name: string }) {
  return (
    <div className="p-3 rounded-lg border border-border bg-card/50 hover:border-accent/30 transition-colors text-center">
      <span className="text-sm text-foreground">{name}</span>
    </div>
  )
}

function InfraTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1.5 rounded-full border border-border bg-secondary/30 text-xs">
      {children}
    </span>
  )
}

function KeyPoint({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card/30">
      <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
