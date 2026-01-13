"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function CoordinationWhyPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Why Coordination?"
        description="Choreography vs Orchestration in Multi-Agent Systems."
        label="Coordination"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Choreography Trap</h2>
        <p>
            In a choreographed system, Agent A talks to Agent B, which talks to Agent C. There is no central brain.
            This works for &lt; 3 agents.
        </p>
        <p>
            At scale, this becomes a mess. You get cyclic dependencies, infinite loops, and no visibility into the global state.
        </p>

        <h2>The Orchestration Advantage</h2>
        <p>
            Consonant uses a central Control Plane (the Orchestrator) to coordinate agents.
        </p>
        <ul>
            <li><strong>Visibility:</strong> You can see the entire state of the workflow in one place.</li>
            <li><strong>Resilience:</strong> If an agent dies, the orchestrator can retry it on a different node.</li>
            <li><strong>Policy:</strong> You can enforce rules like "Agent A cannot talk to Agent C" centrally.</li>
        </ul>
      </div>
    </div>
  )
}
