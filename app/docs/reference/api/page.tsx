"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function ApiReferencePage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="API Reference"
        description="Interact with the Control Plane programmatically."
        label="Reference"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Authentication</h2>
        <p>
            All API requests require a Bearer token.
        </p>

        <h2>Endpoints</h2>
        
        <h3>POST /v1/goals</h3>
        <p>Submit a new high-level goal.</p>
        <CodeBlock language="json" code={`{
  "goal": "Process Q3 reports",
  "context": { "priority": "high" }
}`} />

        <h3>GET /v1/runs/{`{run_id}`}</h3>
        <p>Get the status of a workflow run.</p>
        
        <h3>GET /v1/agents</h3>
        <p>List all registered agents and their health status.</p>
      </div>
    </div>
  )
}
