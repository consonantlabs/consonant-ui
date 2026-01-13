"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function DebuggingScenariosPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Common Scenarios"
        description="Troubleshooting common issues in distributed agent systems."
        label="Debugging"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Agent Timeout</h2>
        <p>
            <strong>Symptom:</strong> The planner waits indefinitely for a step to complete.
        </p>
        <p>
            <strong>Fix:</strong> Check if the agent crashed or if the sidecar lost connectivity.
        </p>
        <CodeBlock language="bash" code={`kubectl get pods -n consonant-agents`} />

        <h2>Looping Agents</h2>
        <p>
            <strong>Symptom:</strong> Two agents keep talking to each other forever.
        </p>
        <p>
            <strong>Fix:</strong> The Control Plane has a default <code>max_steps</code> limit (default: 50) to kill runaway loops.
        </p>
      </div>
    </div>
  )
}
