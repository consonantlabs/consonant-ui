"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function ScalingSecurityPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Scaling & Security"
        description="Hardening your system for enterprise scale."
        label="Production"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Network Policies</h2>
        <p>
            By default, Consonant applies a "Deny All" network policy. 
            Only mTLS traffic from the sidecar is allowed.
        </p>

        <h2>Secret Management</h2>
        <p>
            Inject secrets into agents using Kubernetes Secrets or Vault.
        </p>
        <CodeBlock language="yaml" code={`env:
  - name: API_KEY
    valueFrom:
      secretKeyRef:
        name: my-secret
        key: api-key`} />
      </div>
    </div>
  )
}
