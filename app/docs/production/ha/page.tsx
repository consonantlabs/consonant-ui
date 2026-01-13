"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function HAPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="High Availability"
        description="Ensuring your agent system survives node failures."
        label="Production"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Control Plane HA</h2>
        <p>
            Run at least 3 replicas of the control plane services.
        </p>
        <CodeBlock language="bash" code={`cons scale control-plane --replicas 3`} />

        <h2>Agent HA</h2>
        <p>
            Use Pod Disruption Budgets (PDB) to ensure you always have available agents during cluster upgrades.
        </p>
      </div>
    </div>
  )
}
