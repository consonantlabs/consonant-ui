"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function ScalingPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Scaling Configuration"
        description="Configure Horizontal Pod Autoscaling (HPA) and KEDA triggers."
        label="Agent Development"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Auto-Scaling Strategy</h2>
        <p>
            Consonant supports scaling based on CPU, Memory, or Custom Metrics (via KEDA).
        </p>

        <h3>CPU Scaling (Simple)</h3>
        <p>
            The easiest way to scale is by CPU utilization.
        </p>

        <CodeBlock language="yaml" code={`scale:
  minReplicas: 1
  maxReplicas: 10
  cpuUtilization: 80`} />

        <h3>Event-Driven Scaling (KEDA)</h3>
        <p>
            For queue-based workers, use KEDA triggers.
        </p>

        <CodeBlock language="yaml" code={`scale:
  minReplicas: 0
  maxReplicas: 50
  triggers:
    - type: rabbitmq
      metadata:
        queueName: agent-tasks
        queueLength: "5"`} />

        <Callout type="info" title="Scale to Zero">
            Setting <code>minReplicas: 0</code> allows your agents to shut down completely when idle, saving huge costs.
        </Callout>
      </div>
    </div>
  )
}
