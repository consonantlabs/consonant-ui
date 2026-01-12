import Link from "next/link"
import { ArrowRight, BookOpen, Rocket, Layers, Code2, Shield, Plug } from "lucide-react"

export default function DocsHome() {
  return (
    <div>
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          DOCUMENTATION
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          What is Consonant?
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Consonant is orchestration infrastructure for production AI agent systems. 
          It coordinates multiple agents with governance, auditability, and operational controls.
        </p>
      </div>

      {/* Quick Definition */}
      <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 mb-12">
        <p className="text-lg text-foreground leading-relaxed">
          <strong className="text-primary">In one sentence:</strong> Consonant coordinates multiple AI agents 
          across different frameworks by making intelligent routing decisions at runtime, automatically 
          enforcing governance policies, and providing operational controls that production systems require.
        </p>
      </div>

      {/* The Analogy */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">The Perfect Analogy</h2>
        <p className="text-muted-foreground mb-6">
          Think of Consonant as <strong className="text-foreground">air traffic control for AI agents</strong>.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-destructive/30 bg-destructive/5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-destructive">✗</span> Without Consonant
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Manual coordination between agents</li>
              <li>• Rules scattered across codebases</li>
              <li>• No central record of decisions</li>
              <li>• Chaos at scale</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-primary/30 bg-primary/5">
            <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <span className="text-primary">✓</span> With Consonant
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Automated coordination based on goals</li>
              <li>• Policies enforced automatically</li>
              <li>• Complete audit trail for every decision</li>
              <li>• Scales naturally with your agents</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What Consonant IS / IS NOT */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">What Consonant Is (and Isn't)</h2>
        
        <div className="space-y-4">
          <IsItem 
            is={true}
            title="An Orchestration Control Plane"
            description="Sits between your agents and provides runtime orchestration, policy enforcement, and operational controls."
          />
          <IsItem 
            is={true}
            title="Infrastructure Software"
            description="Self-hosted in your Kubernetes cluster. All data stays in your infrastructure."
          />
          <IsItem 
            is={true}
            title="Framework-Agnostic"
            description="Works with LangChain, AutoGen, CrewAI, or custom agents. Register capabilities, Consonant orchestrates."
          />
          <IsItem 
            is={false}
            title="Not an Agent Builder"
            description="Use LangChain, AutoGen, etc. to build agents. Consonant coordinates agents that already exist."
          />
          <IsItem 
            is={false}
            title="Not a Hosting Platform"
            description="Consonant orchestrates agents wherever they run (your K8s clusters). It's the coordination layer, not the hosting layer."
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Get Started</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <QuickLink
            href="/docs/quickstart"
            icon={<Rocket className="w-5 h-5" />}
            title="Quickstart"
            description="Deploy Consonant in 5 minutes"
          />
          <QuickLink
            href="/docs/architecture"
            icon={<Layers className="w-5 h-5" />}
            title="Architecture"
            description="Understand how Consonant works"
          />
          <QuickLink
            href="/docs/guides/agent-development"
            icon={<Code2 className="w-5 h-5" />}
            title="Agent Development"
            description="Create and register agents"
          />
          <QuickLink
            href="/docs/guides/policy-enforcement"
            icon={<Shield className="w-5 h-5" />}
            title="Policy Enforcement"
            description="Implement governance policies"
          />
          <QuickLink
            href="/docs/integrations/langchain"
            icon={<Plug className="w-5 h-5" />}
            title="Integrations"
            description="Connect existing agent frameworks"
          />
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 rounded-xl border border-border bg-secondary/20">
        <h3 className="font-semibold text-foreground mb-2">Next Steps</h3>
        <p className="text-muted-foreground mb-4">
          Ready to dive in? Start with the quickstart to deploy Consonant, or learn about 
          the core concepts that make it work.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/docs/quickstart"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start the Quickstart
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/docs/why-consonant"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            Learn Why Consonant
          </Link>
        </div>
      </div>
    </div>
  )
}

function IsItem({ is, title, description }: { is: boolean; title: string; description: string }) {
  return (
    <div className={`p-4 rounded-lg border ${is ? "border-border bg-card/30" : "border-border bg-secondary/10"}`}>
      <div className="flex items-start gap-3">
        <span className={`text-lg ${is ? "text-primary" : "text-muted-foreground"}`}>
          {is ? "✓" : "✗"}
        </span>
        <div>
          <h4 className="font-medium text-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  )
}

function QuickLink({ 
  href, 
  icon, 
  title, 
  description 
}: { 
  href: string
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <Link 
      href={href}
      className="group p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 hover:bg-primary/5 transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        </div>
      </div>
    </Link>
  )
}
