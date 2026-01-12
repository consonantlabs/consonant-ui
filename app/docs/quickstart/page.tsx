import Link from "next/link"
import { ArrowRight, Terminal, Copy, Check, Rocket } from "lucide-react"

export default function QuickstartPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
          <Rocket className="w-3.5 h-3.5" />
          QUICKSTART
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Deploy Consonant in 5 Minutes
        </h1>
        <p className="text-lg text-muted-foreground">
          Get from zero to orchestrated agents in three steps. This guide assumes you have 
          a Kubernetes cluster ready.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Prerequisites</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            Kubernetes cluster (1.24+)
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            Helm 3.0+
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-primary" />
            kubectl configured
          </li>
        </ul>
      </div>

      {/* Step 1 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="text-primary">1.</span> Install the Control Plane
        </h2>
        <p className="text-muted-foreground mb-4">
          Add the Consonant Helm repository and install the control plane:
        </p>
        <CodeBlock code={`# Add the Consonant Helm repository
helm repo add consonant https://charts.consonant.dev
helm repo update

# Install the control plane
helm install consonant consonant/consonant \\
  --namespace consonant-system \\
  --create-namespace

# Verify installation
kubectl get pods -n consonant-system`} />
        
        <p className="text-sm text-muted-foreground mt-4">
          Wait for all pods to be in <code className="text-primary px-1 py-0.5 bg-primary/10 rounded">Running</code> state.
          This typically takes 1-2 minutes.
        </p>
      </div>

      {/* Step 2 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="text-primary">2.</span> Register Your First Agent
        </h2>
        <p className="text-muted-foreground mb-4">
          Create an agent manifest that describes your agent's capabilities:
        </p>
        <CodeBlock code={`# my-agent.yaml
apiVersion: consonant.dev/v1
kind: Agent
metadata:
  name: diagnostic-agent
  namespace: default
spec:
  image: mycompany/diagnostic-agent:v1
  capabilities:
    - name: diagnose_pod_issues
      description: "Analyze pod failures and resource issues"
    - name: check_cluster_health
      description: "Verify overall cluster health metrics"
  resources:
    cpu: "500m"
    memory: "512Mi"`} />
        
        <p className="text-muted-foreground mt-4 mb-3">Apply the manifest:</p>
        <CodeBlock code={`kubectl apply -f my-agent.yaml

# Verify agent registered
consonant agents list`} />
      </div>

      {/* Step 3 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          <span className="text-primary">3.</span> Submit Your First Goal
        </h2>
        <p className="text-muted-foreground mb-4">
          Now submit a goal and let Consonant orchestrate:
        </p>
        <CodeBlock code={`# Submit a goal
consonant run --goal "Check if there are any unhealthy pods in the cluster"

# Track the workflow
consonant workflow status <workflow-id>

# View the execution trace
consonant trace view <workflow-id>`} />
        
        <p className="text-muted-foreground mt-4">
          Consonant will analyze your goal, match it to the diagnostic agent's capabilities, 
          and orchestrate the execution automatically.
        </p>
      </div>

      {/* Success */}
      <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 mb-10">
        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <Check className="w-5 h-5 text-primary" />
          You're Now Orchestrating Agents!
        </h3>
        <p className="text-muted-foreground mb-4">
          Consonant is now coordinating your agents. Every invocation is traced, 
          every decision is auditable, and you can add policies at any time.
        </p>
      </div>

      {/* Next Steps */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Next Steps</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <NextStepCard
            href="/docs/guides/agent-development"
            title="Develop More Agents"
            description="Learn how to create agents with rich capability descriptions"
          />
          <NextStepCard
            href="/docs/guides/policy-enforcement"
            title="Add Policies"
            description="Implement approval workflows and governance rules"
          />
          <NextStepCard
            href="/docs/architecture"
            title="Understand the Architecture"
            description="Learn how the control plane, planner, and state store work"
          />
          <NextStepCard
            href="/docs/guides/observability"
            title="Set Up Observability"
            description="Configure distributed tracing and monitoring"
          />
        </div>
      </div>
    </div>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/30 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
          {code}
        </code>
      </pre>
    </div>
  )
}

function NextStepCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link 
      href={href}
      className="group p-4 rounded-xl border border-border bg-card/30 hover:border-primary/30 transition-all"
    >
      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
        {title}
        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </h4>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </Link>
  )
}
