"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function SizingPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Resource Sizing"
        description="Configure CPU and Memory requests for your agents."
        label="Agent Development"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Defaults</h2>
        <p>
            By default, all agents are provisioned with:
        </p>
        <ul>
            <li>Requests: 100m CPU, 128Mi Memory</li>
            <li>Limits: 500m CPU, 512Mi Memory</li>
        </ul>

        <h2>Customizing Resources</h2>
        <p>
            You can override these in your `agent.yaml`.
        </p>

        <CodeBlock language="yaml" code={`name: my-heavy-agent
resources:
  requests:
    cpu: "2"
    memory: "4Gi"
  limits:
    cpu: "4"
    memory: "8Gi"`} />

        <Callout type="warning" title="OOM Kills">
            If your agent exceeds its memory limit, Kubernetes will OOM Kill it. Always set limits higher than your expected peak usage.
        </Callout>
      </div>
    </div>
  )
}
