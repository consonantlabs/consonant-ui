"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function InstrumentationPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Instrumentation"
        description="How to emit custom logs, metrics, and traces."
        label="Agent Development"
      />

      <div className="prose prose-invert max-w-none">
        <h2>OpenTelemetry Integration</h2>
        <p>
            The runtime automatically captures incoming/outgoing requests. 
            However, you often want to trace internal logic.
        </p>

        <h3>Python Example</h3>
        <p>
            Use the standard OpenTelemetry SDK. The sidecar acts as the collector agent.
        </p>

        <CodeBlock language="python" code={`from opentelemetry import trace

tracer = trace.get_tracer(__name__)

def process_data(data):
    with tracer.start_as_current_span("heavy_processing"):
        # Your slow logic here
        pass`} />

        <h2>Logging</h2>
        <p>
            Just print to stdout/stderr. Consonant captures these logs and correlates them with the active trace ID.
        </p>

        <CodeBlock language="python" code={`import logging

# This log will appear in the dashboard linked to the specific request
logging.info("Processing user request...")`} />
      </div>
    </div>
  )
}
