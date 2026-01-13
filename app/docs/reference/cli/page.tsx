"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function CliReferencePage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="CLI Reference"
        description="Complete command list for the Consonant CLI."
        label="Reference"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Global Flags</h2>
        <ul>
            <li><code>--debug</code>: Enable verbose logging</li>
            <li><code>--namespace</code>: Kubernetes namespace (default: consonant)</li>
        </ul>

        <h2>Commands</h2>

        <h3>cons init</h3>
        <p>Initialize the control plane.</p>

        <h3>cons deploy</h3>
        <p>Deploy the current project to the cluster.</p>

        <h3>cons run</h3>
        <p>Execute a workflow.</p>

        <h3>cons logs</h3>
        <p>Stream logs from distributed agents.</p>
        
        <h3>cons dashboard</h3>
        <p>Open the web dashboard.</p>
      </div>
    </div>
  )
}
