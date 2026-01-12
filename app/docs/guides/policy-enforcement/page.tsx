import { DocHeader, CodeBlock, Callout, NextStepCard } from "../../doc-components"
import { Shield, Lock, FileKey } from "lucide-react"

export default function PolicyEnforcementPage() {
  return (
    <div>
      <DocHeader 
        title="Policy Enforcement"
        description="Govern agent behavior with Policy-as-Code using Open Policy Agent (OPA)."
        label="GUIDE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          Consonant intercepts every agent call <strong>before</strong> it reaches the agent. 
          It evaluates the request against your defined OPA policies. If the policy denies 
          the action, the agent is never invoked.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Writing Policies</h2>
        <p>
          Policies are written in <strong>Rego</strong>. Consonant provides the following input to your policies:
        </p>

        <CodeBlock code={`{
  "agent": "stripe-agent",
  "capability": "refund_charge",
  "parameters": {
    "amount": 500,
    "user_id": "cust_123"
  },
  "user": {
    "role": "support_agent"
  }
}`} language="json" />

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">Example: Limit Refund Amount</h3>
        
        <CodeBlock code={`package consonant.policies

default allow = false

# Allow refunds under $100 automatically
allow {
    input.capability == "refund_charge"
    input.parameters.amount < 100
}

# Require approval for refunds over $100
require_approval {
    input.capability == "refund_charge"
    input.parameters.amount >= 100
}`} language="rego" />

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Human-in-the-Loop</h2>
        <p>
          When a policy returns <code>require_approval</code>, the workflow pauses. 
          An operator must approve the action via the Consonant UI or API before it proceeds.
        </p>

        <Callout type="info" title="Timeout Configuration">
          Approvals have a configurable timeout (default: 24h). If not approved in time, 
          the workflow step fails with <code>APPROVAL_TIMEOUT</code>.
        </Callout>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Global vs. Agent Policies</h2>
        <p>
          You can apply policies at different levels:
        </p>
        <ul className="list-disc pl-6 space-y-2">
           <li><strong>Global:</strong> Apply to all agents (e.g., "No PII in logs")</li>
           <li><strong>Namespace:</strong> Apply to specific teams (e.g., "Finance team only")</li>
           <li><strong>Agent:</strong> Specific constraints (e.g., "Read-only DB access")</li>
        </ul>

      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Next Steps</h3>
        <div className="grid sm:grid-cols-2 gap-4">
           <NextStepCard href="/docs/guides/human-in-the-loop" title="Human-in-the-Loop" description="Managing approvals" />
           <NextStepCard href="/docs/reference/config" title="Configuration" description="Policy configuration reference" />
        </div>
      </div>
    </div>
  )
}
