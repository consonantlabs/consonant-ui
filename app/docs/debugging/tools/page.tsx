"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function DebuggingToolsPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Debugging Tools"
        description="The CLI and Dashboard are your best friends."
        label="Debugging"
      />

      <div className="prose prose-invert max-w-none">
        <h2>The Dashboard</h2>
        <p>
            Running <code>cons dashboard</code> opens the web UI at <code>localhost:3000</code>.
            Here you can see the timeline view of all executed workflows.
        </p>

        <h2>CLI Debugging</h2>
        <p>
            Use <code>cons logs</code> to tail logs from distributed agents.
        </p>

        <CodeBlock language="bash" code={`# Stream logs from all agents in a workflow run
cons logs --run-id <RUN_ID> -f

# Get logs from a specific agent service
cons logs --agent researcher`} />
      </div>
    </div>
  )
}
