import { DocHeader, CodeBlock, Callout, NextStepCard } from "../../doc-components"
import { Activity, Eye, Search } from "lucide-react"

export default function ObservabilityPage() {
  return (
    <div>
      <DocHeader 
        title="Observability"
        description="Gain complete visibility into agent workflows with OpenTelemetry distributed tracing."
        label="GUIDE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          Debugging multi-agent systems is notoriously difficult. Consonant provides 
          <strong>end-to-end distributed tracing</strong> out of the box. Every system component 
          emits OTEL traces.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Trace Structure</h2>
        <p>
          A single "Run" (Workflow) creates a root span. Each step (Planning, Policy Check, Agent Execution) 
          is a child span.
        </p>

        <div className="my-8 rounded-xl border border-border bg-secondary/10 p-6 font-mono text-sm">
           <div className="flex flex-col gap-2">
             <div className="flex items-center gap-2">
                <span className="text-primary">run-8392</span>
                <span className="text-muted-foreground">Order Processing</span>
                <span className="ml-auto text-muted-foreground">4.2s</span>
             </div>
             <div className="pl-6 flex items-center gap-2 border-l border-border/50">
                <span className="text-chart-4">planning</span>
                <span className="text-muted-foreground">Planner</span>
                <span className="ml-auto text-muted-foreground">1.1s</span>
             </div>
             <div className="pl-6 flex items-center gap-2 border-l border-border/50">
                <span className="text-chart-2">policy-check</span>
                <span className="text-muted-foreground">OPA</span>
                <span className="ml-auto text-muted-foreground">0.05s</span>
             </div>
             <div className="pl-6 flex items-center gap-2 border-l border-border/50">
                <span className="text-chart-1">agent-exec</span>
                <span className="text-muted-foreground">stripe-agent</span>
                <span className="ml-auto text-muted-foreground">0.8s</span>
             </div>
           </div>
        </div>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Exporting Traces</h2>
        <p>
          Consonant supports standard OTLP exporters. You can send traces to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
           <li>Jaeger</li>
           <li>Prometheus / Grafana</li>
           <li>Datadog</li>
           <li>Honeycomb</li>
        </ul>

        <CodeBlock code={`# helm-values.yaml
observability:
  tracing:
    enabled: true
    exporter: otlp
    endpoint: "http://jaeger-collector:4317"`} language="yaml" />

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Audit Logs</h2>
        <p>
          Separate from performance traces, Consonant maintains immutable <strong>Audit Logs</strong> 
          for compliance. These log <em>decisions</em> rather than just latency.
        </p>
        
        <Callout type="info" title="Audit Retention">
          Audit logs are stored in PostgreSQL by default but can be streamed to S3 or Splunk for long-term retention.
        </Callout>

      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Next Steps</h3>
        <div className="grid sm:grid-cols-2 gap-4">
           <NextStepCard href="/docs/reference/config" title="Configuration" description="Configure exporters" />
           <NextStepCard href="/docs/guides/human-in-the-loop" title="Human-in-the-Loop" description="Manage manual interventions" />
        </div>
      </div>
    </div>
  )
}
