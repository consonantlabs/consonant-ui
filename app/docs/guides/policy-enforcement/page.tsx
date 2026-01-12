import Link from "next/link"
import { ArrowRight, Shield, FileText, Check, AlertTriangle } from "lucide-react"

export default function PolicyEnforcementPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
          <Shield className="w-3.5 h-3.5" />
          CORE GUIDE
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Policy Enforcement
        </h1>
        <p className="text-lg text-muted-foreground">
          Define governance rules once using Open Policy Agent (OPA). Consonant enforces them 
          automatically before every agent invocation.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground mb-4">
          Consonant uses <a href="https://www.openpolicyagent.org/" target="_blank" className="text-primary hover:underline">Open Policy Agent (OPA)</a> to 
          evaluate policies written in <a href="https://www.openpolicyagent.org/docs/latest/policy-language/" target="_blank" className="text-primary hover:underline">Rego</a> language. 
          Before any agent is invoked, Consonant sends the execution context to OPA and receives a policy decision.
        </p>
        
        <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
          <p className="text-sm text-foreground">
            <strong>Key insight:</strong> Policies are evaluated at runtime, not compile time. 
            You can update policies without redeploying agents.
          </p>
        </div>
      </div>

      {/* Example Policies */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Example Policies</h2>
        
        <div className="space-y-6">
          {/* Approval Policy */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Require Approval for Production Changes</h3>
            <CodeBlock code={`# policies/production.rego
package consonant.policies

# Require approval for any infrastructure change in production
require_approval if {
    input.environment == "production"
    input.action_type == "infrastructure_change"
}

# Also require approval for high-value transactions
require_approval if {
    input.action_type == "financial_transaction"
    input.parameters.amount > 10000
}`} />
          </div>

          {/* Deny Policy */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Deny Dangerous Operations</h3>
            <CodeBlock code={`# policies/safety.rego
package consonant.policies

# Deny DELETE operations on production database
deny[msg] if {
    input.environment == "production"
    input.action_type == "database_operation"
    contains(input.parameters.query, "DELETE")
    msg := "DELETE operations not allowed in production"
}

# Deny operations outside business hours
deny[msg] if {
    not is_business_hours
    input.risk_level == "high"
    msg := "High-risk operations only allowed during business hours"
}`} />
          </div>

          {/* Cost Control Policy */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Cost Controls</h3>
            <CodeBlock code={`# policies/cost.rego
package consonant.policies

# Deny if estimated LLM cost exceeds budget
deny[msg] if {
    estimated_cost := input.llm_tokens * 0.00003
    estimated_cost > input.budget_limit
    msg := sprintf("Estimated cost $%.2f exceeds limit $%.2f", 
                   [estimated_cost, input.budget_limit])
}

# Warn on high token usage
warn[msg] if {
    input.llm_tokens > 10000
    msg := "High token usage detected"
}`} />
          </div>
        </div>
      </div>

      {/* Policy Types */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Policy Decision Types</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <PolicyType
            type="allow"
            description="Execution proceeds immediately"
            color="primary"
          />
          <PolicyType
            type="require_approval"
            description="Execution pauses until human approves"
            color="chart-4"
          />
          <PolicyType
            type="deny"
            description="Execution is blocked with error message"
            color="destructive"
          />
        </div>
      </div>

      {/* Approval Workflow */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Approval Workflow</h2>
        <p className="text-muted-foreground mb-4">
          When a policy requires approval, Consonant pauses the workflow and notifies approvers:
        </p>
        
        <div className="space-y-3">
          <WorkflowStep 
            number={1}
            title="Policy triggers approval requirement"
            description="Consonant evaluates policy, determines approval needed"
          />
          <WorkflowStep 
            number={2}
            title="Notification sent"
            description="Slack notification, email, or webhook to configured approvers"
          />
          <WorkflowStep 
            number={3}
            title="Human reviews context"
            description="Approver sees full context: what, why, risk level, evidence"
          />
          <WorkflowStep 
            number={4}
            title="Decision recorded"
            description="Approve/deny with reason, timestamp, approver identity"
          />
          <WorkflowStep 
            number={5}
            title="Execution continues or stops"
            description="Approved: workflow resumes. Denied: workflow fails with explanation"
          />
        </div>
      </div>

      {/* Deploying Policies */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Deploying Policies</h2>
        <CodeBlock code={`# Apply policies from a directory
consonant policies apply ./policies/

# List active policies
consonant policies list

# Test a policy before deployment
consonant policies test ./policies/production.rego \\
  --input '{"environment": "production", "action_type": "infrastructure_change"}'

# Expected output:
# require_approval: true`} />
      </div>

      {/* Next Steps */}
      <div className="p-6 rounded-xl border border-border bg-secondary/20">
        <h3 className="font-semibold text-foreground mb-4">Related Guides</h3>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/docs/guides/human-in-the-loop"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            Human-in-the-Loop
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/docs/guides/observability"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            Audit Trails
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/30 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  )
}

function PolicyType({ type, description, color }: { type: string; description: string; color: string }) {
  return (
    <div className={`p-4 rounded-lg border border-${color}/30 bg-${color}/5`}>
      <code className={`text-${color} font-mono font-bold`}>{type}</code>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </div>
  )
}

function WorkflowStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4 p-3 rounded-lg border border-border bg-card/30">
      <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-medium text-foreground text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
