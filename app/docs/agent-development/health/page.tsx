"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function HealthPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Health Checks"
        description="Liveness and Readiness probes for reliable operations."
        label="Agent Development"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Why Health Checks?</h2>
        <p>
            Kubernetes needs to know if your agent is alive and ready to receive traffic.
        </p>

        <h2>Default Behavior</h2>
        <p>
            The Sidecar automatically exposes health endpoints which check if it can reach your agent code on port 8080.
        </p>

        <h2>Custom Health Logic</h2>
        <p>
            If your agent needs to check external dependencies (like a DB connection), implement a <code>/health</code> endpoint.
        </p>

        <CodeBlock language="python" code={`@app.route("/health")
def health():
    if not db.is_connected():
        return "DB Down", 500
    return "OK", 200`} />

        <p>Then configure it in <code>agent.yaml</code>:</p>

        <CodeBlock language="yaml" code={`health:
  path: /health
  port: 8080
  initialDelaySeconds: 10`} />
      </div>
    </div>
  )
}
