import { DocHeader, CodeBlock, Callout, NextStepCard } from "../../doc-components"
import { Users, CheckCircle, XCircle, Clock } from "lucide-react"

export default function HumanInTheLoopPage() {
  return (
    <div>
      <DocHeader 
        title="Human-in-the-Loop"
        description="Seamlessly integrate human approval steps into your AI agent workflows for high-stakes decisions."
        label="GUIDE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          Full autonomy isn't always desirable. Consonant allows you to inject human checkpoints 
          anywhere in the workflow. These are typically triggered by <strong>policies</strong>.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Triggering Approvals</h2>
        <p>
          Approvals are triggered via OPA policies returning the <code>require_approval</code> decision.
        </p>

        <CodeBlock code={`require_approval {
    input.capability == "delete_resource"
    input.parameters.environment == "production"
}`} language="rego" />

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">The Approval Workflow</h2>
        <div className="grid gap-6 md:grid-cols-3 my-8">
           <div className="p-4 rounded-xl border border-border bg-card">
              <div className="font-bold text-foreground mb-2">1. Paused</div>
              <p className="text-sm">Workflow suspends state. Resources are released.</p>
           </div>
           <div className="p-4 rounded-xl border border-border bg-card">
              <div className="font-bold text-foreground mb-2">2. Notified</div>
              <p className="text-sm">Consonant sends a structured approval request event.</p>
           </div>
           <div className="p-4 rounded-xl border border-border bg-card">
              <div className="font-bold text-foreground mb-2">3. Resumed</div>
              <p className="text-sm">On approval, the task executes with original context.</p>
           </div>
        </div>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Managing Approvals</h2>
        <p>
          You can list, approve, or deny pending requests via CLI.
        </p>

        <CodeBlock code={`# List pending approvals
consonant approvals list

# ID        WORKFLOW    AGENT         REASON
# app_123   run_892     db-agent      Production DB deletion attempt

# Approve
consonant approvals approve app_123 --comment "Authorized by DevOps lead"

# Deny
consonant approvals deny app_123 --comment "Too risky"`} />

        <Callout type="danger" title="Denial Handling">
          If a request is denied, the workflow step fails with a <code>POLICY_DENIED</code> error. 
          The planner may attempt to find an alternative route if one exists.
        </Callout>

      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Next Steps</h3>
        <div className="grid sm:grid-cols-2 gap-4">
           <NextStepCard href="/docs/reference/cli" title="CLI Reference" description="See all approval commands" />
           <NextStepCard href="/docs/reference/api" title="API Reference" description="Automate approvals via API" />
        </div>
      </div>
    </div>
  )
}
