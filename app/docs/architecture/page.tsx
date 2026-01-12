import { DocHeader, CodeBlock, Callout, NextStepCard } from "../doc-components"
import { Layers, Server, Shield, Database } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div>
      <DocHeader 
        title="System Architecture"
        description="Learn how Consonant coordinates agents, enforces policies, and manages state across distributed environments."
        label="ARCHITECTURE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          Consonant follows a <strong>control plane / data plane</strong> architecture similar to Kubernetes itself. 
          The control plane handles orchestration logic, policy decisions, and state management, while the 
          data plane (your agents) runs independently in your infrastructure.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">High-Level Overview</h2>
        
        {/* Simple Diagram Placeholder */}
        <div className="my-8 p-8 rounded-xl border border-border bg-secondary/10 flex flex-col items-center gap-8">
          <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-center w-64">
             <div className="font-bold text-primary mb-1">Control Plane</div>
             <div className="text-xs text-muted-foreground">API • Planner • Policy Engine</div>
          </div>
          <div className="h-8 w-px bg-border dashed" />
          <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            <div className="p-4 rounded-lg bg-card border border-border text-center">
              <div className="font-medium text-foreground">Agent A</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border text-center">
              <div className="font-medium text-foreground">Agent B</div>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border text-center">
              <div className="font-medium text-foreground">Agent C</div>
            </div>
          </div>
          <div className="text-xs text-muted-foreground uppercase tracking-widest mt-2">Kubernetes Cluster</div>
        </div>

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">Core Components</h3>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-5 rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <Server className="w-5 h-5" />
              <div className="font-semibold">The Planner</div>
            </div>
            <p className="text-sm">
              Receives high-level goals and decomposes them into executable tasks based on 
              registered agent capabilities. Uses an LLM-driven reasoning loop (LangGraph) 
              to adapt to task failures.
            </p>
          </div>
          
          <div className="p-5 rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-3 text-primary">
              <Shield className="w-5 h-5" />
              <div className="font-semibold">Policy Engine</div>
            </div>
            <p className="text-sm">
              Intercepts every agent invocation to enforce OPA policies. Decides whether to 
              allow, deny, or require human approval for an action.
            </p>
          </div>
        </div>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">The KAgent Sidecar</h2>
        <p>
          Consonant interacts with your agents via the <strong>KAgent protocol</strong>. You can implement 
          this protocol directly, or use our lightweight sidecar/SDK which handles:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
           <li>Registration of capabilities with the control plane</li>
           <li>Health checks and liveness probes</li>
           <li>Standardized logging and tracing (OTEL)</li>
        </ul>

        <CodeBlock code={`# Example KAgent Registration
apiVersion: consonant.dev/v1
kind: Agent
metadata:
  name: researcher
spec:
  capabilities:
    - name: search_web
    - name: summarize_content
  scale:
    minReplicas: 1
    maxReplicas: 5`} language="yaml" />

        <Callout type="warning" title="Note on Connectivity">
          The control plane needs network reachability to your agent pods. In a multi-cluster setup, 
          this is typically handled via an ingress controller or service mesh.
        </Callout>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Data Flow</h2>
        <ol className="list-decimal pl-6 space-y-4 mt-4">
          <li><strong>Goal Submission:</strong> User submits a goal via CLI or API.</li>
          <li><strong>Planning:</strong> Control plane analyzes the goal and available agents.</li>
          <li><strong>Routing:</strong> Task is dispatched to the appropriate agent.</li>
          <li><strong>Policy Check:</strong> Request is validated against OPA policies.</li>
          <li><strong>Execution:</strong> Agent performs the task and returns result.</li>
          <li><strong>Observation:</strong> Result is recorded and plan is updated.</li>
        </ol>

      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Related Resources</h3>
        <div className="grid sm:grid-cols-2 gap-4">
           <NextStepCard href="/docs/guides/agent-development" title="Building Agents" description="How to write agents compatible with Consonant" />
           <NextStepCard href="/docs/guides/policy-enforcement" title="Policy Logic" description="Deep dive into OPA policies" />
        </div>
      </div>
    </div>
  )
}
