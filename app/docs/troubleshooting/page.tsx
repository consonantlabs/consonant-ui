import { DocHeader, CodeBlock, Callout } from "../doc-components"

export default function TroubleshootingPage() {
  return (
    <div>
      <DocHeader 
        title="Troubleshooting"
        description="Solutions for common issues when running Consonant."
        label="RESOURCES"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        
        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Agent Registration Issues</h2>
        <h3 className="text-foreground text-xl font-semibold mt-4 mb-2">Agent not appearing in list</h3>
        <p>
          If your agent is running but not showing up in <code>consonant agents list</code>:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
           <li>Check that the <code>Agent</code> manifest is applied in the correct namespace.</li>
           <li>Verify the sidecar/SDK can reach the control plane (check network policies).</li>
           <li>Check logs: <code>kubectl logs -l app=my-agent</code></li>
        </ul>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Workflow Failures</h2>
        <h3 className="text-foreground text-xl font-semibold mt-4 mb-2">Planner Loop Limit Exceeded</h3>
        <p>
          If a workflow fails with <code>LOOP_LIMIT_EXCEEDED</code>, the planner got stuck in a reasoning loop.
        </p>
        <Callout type="warning" title="Fix">
          Try making your goal more specific, or breaking it down into smaller sub-goals. 
          Check if your agents are returning ambiguous observation data.
        </Callout>

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-2">Policy Denied</h3>
        <p>
          If a step fails with <code>POLICY_DENIED</code>, check the trace to see which policy triggered it.
        </p>
        <CodeBlock code={`consonant trace view <run-id>`} />

      </div>
    </div>
  )
}
