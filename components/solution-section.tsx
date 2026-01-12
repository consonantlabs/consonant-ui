"use client"

import { useState } from "react"
import { BookOpen, Zap, Database, Shield, LineChart, ChevronRight, Check, Cpu, Workflow } from "lucide-react"

export function SolutionSection() {
  const [activeTab, setActiveTab] = useState(0)
  
  const solutions = [
    {
      icon: Cpu,
      title: "Goal-Driven Orchestration",
      shortDesc: "Tell Consonant what, not how",
      description: "Submit goals in natural language. Consonant's LangGraph-powered planning engine analyzes available agents, constructs execution plans dynamically, and adapts to failures automatically. No hardcoded workflows.",
      features: [
        "Runtime agent selection based on capabilities",
        "Dynamic replanning when assumptions change",
        "Parallel execution of independent sub-goals",
        "Automatic failure handling and retries",
      ],
      code: `# Submit a goal - Consonant orchestrates automatically
consonant run --goal "Diagnose database slowness and fix it"

# Consonant plans and executes:
# → Routes to diagnostic-agent
# → Analyzes results  
# → Routes to remediation-agent
# → Verifies fix applied`,
    },
    {
      icon: Shield,
      title: "Declarative Policy Enforcement",
      shortDesc: "Governance that actually works",
      description: "Define policies once using Open Policy Agent (OPA). Consonant enforces them before every agent invocation. Automatic approvals for high-risk actions. Complete audit trails for compliance.",
      features: [
        "Policy-as-code with OPA/Rego",
        "Automatic human-in-the-loop approvals",
        "Rate limiting and cost controls",
        "Complete audit trails for compliance",
      ],
      code: `# Rego policy: require approval for production changes
package consonant.policies

require_approval if {
    input.environment == "production"
    input.action_type == "infrastructure_change"
}

deny[msg] if {
    estimated_cost := input.llm_tokens * 0.00003
    estimated_cost > 10
    msg := "Cost exceeds $10 limit"
}`,
    },
    {
      icon: LineChart,
      title: "Complete Observability",
      shortDesc: "See everything, debug anything",
      description: "OpenTelemetry-native tracing captures every agent call, LLM invocation, and policy decision. Replay failed workflows. Pause mid-execution. Export audit trails for compliance.",
      features: [
        "Distributed tracing with OpenTelemetry",
        "Deterministic replay for debugging",
        "Pause and resume workflows",
        "Export audit logs for compliance",
      ],
      code: `# Every execution is fully traced
Run ID: run_abc123
Goal: "Process refund for customer #12345"

TRACE:
├─ Planning (0.8s)
│  ├─ LLM Call: Claude Sonnet ($0.02)
│  └─ Policy Check: ALLOW
├─ customer-db-agent (0.4s) ✓
├─ Policy Check: REQUIRE_APPROVAL
├─ Human Approval (45s) ✓
└─ refund-processor-agent (1.1s) ✓

Total: 47.3s | Cost: $0.04`,
    },
  ]

  return (
    <section className="py-28 px-6 bg-gradient-to-b from-background via-primary/[0.02] to-background relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Workflow className="w-3.5 h-3.5" />
            THE SOLUTION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            How Consonant Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Infrastructure-grade orchestration with the operational controls 
            production AI systems require.
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-2 space-y-3">
            {solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                  activeTab === index
                    ? "border-primary/50 bg-primary/5 shadow-lg shadow-primary/5"
                    : "border-border bg-card/30 hover:border-primary/30 hover:bg-primary/[0.02]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    activeTab === index 
                      ? "bg-primary/20 border border-primary/40" 
                      : "bg-secondary/50 border border-border group-hover:border-primary/30"
                  }`}>
                    <solution.icon className={`w-5 h-5 transition-colors ${
                      activeTab === index ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold transition-colors ${
                        activeTab === index ? "text-primary" : "text-foreground"
                      }`}>
                        {solution.title}
                      </h3>
                      <ChevronRight className={`w-4 h-4 transition-all ${
                        activeTab === index 
                          ? "text-primary translate-x-0.5" 
                          : "text-muted-foreground opacity-0 group-hover:opacity-100"
                      }`} />
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{solution.shortDesc}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Description */}
              <div className="p-6 border-b border-border">
                <p className="text-foreground leading-relaxed">
                  {solutions[activeTab].description}
                </p>
                
                {/* Features */}
                <div className="mt-5 grid sm:grid-cols-2 gap-3">
                  {solutions[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Code Block */}
              <div className="bg-secondary/30">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">example</span>
                </div>
                <pre className="p-5 overflow-x-auto">
                  <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
                    {solutions[activeTab].code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
