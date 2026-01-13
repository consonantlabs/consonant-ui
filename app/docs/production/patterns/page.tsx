"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function ProductionPatternsPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Deployment Patterns"
        description="Blue/Green and Canary deployments for Agents."
        label="Production"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Canary Deployments</h2>
        <p>
            You can deploy a new version of an agent alongside the old one and route 10% of traffic to it.
        </p>
        
        <CodeBlock language="yaml" code={`name: researcher
version: v2
traffic:
  weight: 10`} />

        <h2>Shadow Mode</h2>
        <p>
            Run the new agent version in parallel with the old one, but discard its output. 
            Useful for testing accuracy without user impact.
        </p>
      </div>
    </div>
  )
}
