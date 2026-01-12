import Link from "next/link"
import { ArrowRight, Layers, Server, Box, Shield, Database, Activity } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
          <Layers className="w-3.5 h-3.5" />
          ARCHITECTURE
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Architecture Overview
        </h1>
        <p className="text-lg text-muted-foreground">
          Consonant follows a four-tier architecture with clear separation of concerns: 
          Control Plane, Mediator, Agent Runtime, and Infrastructure.
        </p>
      </div>

      {/* Architecture Diagram */}
      <div className="mb-12">
        <div className="p-6 rounded-xl border border-border bg-card/30">
          <div className="space-y-3">
            <ArchLayer 
              title="Control Plane" 
              subtitle="Orchestration + Policy + State"
              color="primary"
              items={["API Layer (TypeScript)", "Intelligence (LangGraph)", "Policy Engine (OPA)", "State Store (PostgreSQL)"]}
            />
            <div className="flex justify-center">
              <div className="w-px h-6 bg-gradient-to-b from-primary/50 to-accent/50" />
            </div>
            <ArchLayer 
              title="Your Agents" 
              subtitle="Any Framework"
              color="accent"
              items={["LangChain", "AutoGen", "CrewAI", "Custom"]}
            />
            <div className="flex justify-center">
              <div className="w-px h-6 bg-gradient-to-b from-accent/50 to-muted-foreground/30" />
            </div>
            <ArchLayer 
              title="Your Infrastructure" 
              subtitle="Kubernetes / Cloud / On-Premise"
              color="muted"
              items={["AWS EKS", "GKE", "Azure AKS", "On-Premise"]}
            />
          </div>
        </div>
      </div>

      {/* Control Plane */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Server className="w-6 h-6 text-primary" />
          Control Plane Components
        </h2>
        <p className="text-muted-foreground mb-6">
          The control plane is the brain of Consonant. It runs in your Kubernetes cluster 
          and coordinates all orchestration decisions.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <ComponentCard
            icon={<Activity className="w-5 h-5" />}
            title="API Layer"
            tech="TypeScript / Node.js"
            description="REST API and WebSocket endpoints for workflow submission, status queries, and real-time updates."
          />
          <ComponentCard
            icon={<Box className="w-5 h-5" />}
            title="Intelligence Layer"
            tech="Python / LangGraph"
            description="Reflective planning engine that analyzes goals, matches agent capabilities, and constructs execution plans."
          />
          <ComponentCard
            icon={<Shield className="w-5 h-5" />}
            title="Policy Engine"
            tech="OPA / Rego"
            description="Evaluates governance policies before every agent invocation. Handles approvals, rate limits, and access control."
          />
          <ComponentCard
            icon={<Database className="w-5 h-5" />}
            title="State Store"
            tech="PostgreSQL"
            description="Append-only event log for workflow history. Enables deterministic replay and complete audit trails."
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">How a Goal Becomes an Execution</h2>
        <div className="space-y-4">
          <Step 
            number={1}
            title="Goal Submission"
            description="User submits a natural language goal via CLI or API. The goal is stored with a unique workflow ID."
          />
          <Step 
            number={2}
            title="Planning"
            description="The Intelligence Layer analyzes the goal, queries available agent capabilities, and constructs an execution plan."
          />
          <Step 
            number={3}
            title="Policy Evaluation"
            description="Before each agent invocation, the Policy Engine evaluates Rego policies. High-risk actions may require approval."
          />
          <Step 
            number={4}
            title="Agent Execution"
            description="The selected agent executes. Results are captured, analyzed, and may trigger replanning."
          />
          <Step 
            number={5}
            title="Completion"
            description="Once the goal is satisfied (or fails), the workflow completes with a full audit trail."
          />
        </div>
      </div>

      {/* Key Design Decisions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Key Design Decisions</h2>
        <div className="space-y-4">
          <DesignDecision
            title="Polyglot Architecture"
            description="TypeScript for the API layer (fast I/O, async), Python for intelligence (superior AI/ML tooling). Communication via gRPC."
          />
          <DesignDecision
            title="Self-Hosted First"
            description="The entire control plane runs in your infrastructure. Data never leaves your environment. Optional SaaS UI connects via webhooks."
          />
          <DesignDecision
            title="Append-Only History"
            description="All workflow state changes are recorded in an append-only log. This enables deterministic replay and complete auditability."
          />
          <DesignDecision
            title="Framework Agnostic"
            description="Agents register capabilities, not implementations. Consonant orchestrates any agent that exposes a standard interface."
          />
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 rounded-xl border border-border bg-secondary/20">
        <h3 className="font-semibold text-foreground mb-4">Explore Further</h3>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/docs/architecture/control-plane"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            Control Plane Deep Dive
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/docs/architecture/agent-runtime"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            Agent Runtime
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/docs/architecture/state"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            State Management
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ArchLayer({ title, subtitle, color, items }: { title: string; subtitle: string; color: "primary" | "accent" | "muted"; items: string[] }) {
  const colorClasses = {
    primary: "border-primary/40 bg-primary/5",
    accent: "border-accent/40 bg-accent/5",
    muted: "border-border bg-secondary/20",
  }
  
  return (
    <div className={`p-4 rounded-lg border ${colorClasses[color]}`}>
      <div className="text-center mb-3">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item, i) => (
          <span key={i} className="px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function ComponentCard({ icon, title, tech, description }: { icon: React.ReactNode; title: string; tech: string; description: string }) {
  return (
    <div className="p-4 rounded-xl border border-border bg-card/30">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground">{tech}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-sm font-bold shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function DesignDecision({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card/30">
      <h4 className="font-medium text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
