"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function PolicyExamplesPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Policy Examples"
        description="Common OPA policies for governing agents."
        label="Policies"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Data Access Control</h2>
        <p>
            Prevent standard agents from accessing sensitive PII.
        </p>

        <CodeBlock language="rego" code={`package consonant.authz

default allow = false

allow {
    input.agent.role == "data-processor"
    input.resource.tag == "pii"
}

allow {
    input.resource.tag != "pii"
}`} />

        <h2>Budget Enforcement</h2>
        <p>
            Prevent agents from consuming too many tokens.
        </p>

        <CodeBlock language="rego" code={`package consonant.budget

deny[msg] {
    daily_spend := input.metrics.daily_spend
    limit := 50.00
    daily_spend > limit
    msg = sprintf("Daily spend limit %.2f exceeded", [limit])
}`} />
      </div>
    </div>
  )
}
