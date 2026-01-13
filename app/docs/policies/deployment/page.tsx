"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function PolicyDeploymentPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Deploying Policies"
        description="How to apply OPA policies to your cluster."
        label="Policies"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Policy Bundle</h2>
        <p>
            Policies are defined in <code>.rego</code> files in your project's <code>policies/</code> directory.
        </p>

        <h2>Applying Changes</h2>
        <p>
            When you run <code>cons deploy</code>, the CLI:
        </p>
        <ol>
            <li>Validates your Rego files.</li>
            <li>Bundles them into a configmap.</li>
            <li>Hot-reloads the OPA sidecars.</li>
        </ol>

        <CodeBlock language="bash" code={`# Validate policies locally
cons policy check ./policies

# Deploy to cluster
cons deploy`} />
      </div>
    </div>
  )
}
