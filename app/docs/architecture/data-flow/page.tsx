"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"

export default function DataFlowPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Data Flow Lifecycle"
        description="How data moves from the user to the control plane, to agents, and back."
        label="Architecture"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Request Lifecycle</h2>
        <p>
          Understanding how a user request traverses the Consonant system is key to debugging and optimization.
        </p>

        <h3>1. Ingestion</h3>
        <p>
          All requests hit the <strong>Control Plane Ingress</strong> first. This is a standard Kubernetes Ingress (Nginx/Traefik).
          The request is routed to the <code>consonant-api</code> service.
        </p>

        <h3>2. Planning</h3>
        <p>
          The API service persists the request and hands it to the <strong>Planner</strong>. The Planner (an LLM-backed service)
          analyzes the request and generates a DAG (Directed Acyclic Graph) of steps.
        </p>

        <h3>3. Dispatch</h3>
        <p>
          The <strong>Dispatcher</strong> picks up ready steps from the DAG. It identifies the target KAgent service via the Service Discovery registry.
        </p>

        <h3>4. Agent Execution (Sidecar)</h3>
        <p>
          The request is sent to the <strong>KAgent Pod</strong>. 
          First, it hits the <strong>Sidecar Proxy</strong>. The proxy:
        </p>
        <ul>
            <li>Validates mTLS certificates.</li>
            <li>Checks OPA policies (e.g., "Is this agent allowed to access PII?").</li>
            <li>Starts an OpenTelemetry trace span.</li>
        </ul>
        <p>
            Only then is the request forwarded to your agent code (localhost:8080).
        </p>

        <h3>5. Response & State Update</h3>
        <p>
            Your agent processes the work and returns a result. The Sidecar captures this result, updates the State Store, and notifies the Dispatcher that the step is complete.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/architecture/kagent"
            title="KAgent Internals"
            description="Deep dive into the sidecar."
          />
          <NextStepCard 
            href="/docs/coordination/state"
            title="State Management"
            description="How state is persisted."
          />
        </div>
      </div>
    </div>
  )
}
