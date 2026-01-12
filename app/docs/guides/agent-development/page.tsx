import Link from "next/link"
import { ArrowRight, Code2, Check, AlertTriangle } from "lucide-react"

export default function AgentDevelopmentPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
          <Code2 className="w-3.5 h-3.5" />
          CORE GUIDE
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Agent Development
        </h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create agents that work with Consonant. Any agent framework works - 
          you just need to register capabilities correctly.
        </p>
      </div>

      {/* Key Concept */}
      <div className="p-6 rounded-xl border border-primary/30 bg-primary/5 mb-10">
        <h3 className="font-semibold text-foreground mb-2">Key Concept</h3>
        <p className="text-muted-foreground">
          Consonant doesn't care <em>how</em> your agent works internally. It only cares about 
          <strong className="text-foreground"> what capabilities</strong> your agent exposes. 
          You describe capabilities in a manifest, and Consonant routes work to your agent based on those descriptions.
        </p>
      </div>

      {/* Agent Manifest */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">The Agent Manifest</h2>
        <p className="text-muted-foreground mb-4">
          Every agent is defined by a YAML manifest that describes its capabilities, resource requirements, 
          and configuration.
        </p>
        
        <CodeBlock code={`# agent.yaml
apiVersion: consonant.dev/v1
kind: Agent
metadata:
  name: k8s-diagnostic
  namespace: production
  labels:
    team: platform
    environment: production
spec:
  # Container image for the agent
  image: mycompany/k8s-diagnostic:v2.1
  
  # Capabilities - these are what Consonant uses for routing
  capabilities:
    - name: diagnose_pod_issues
      description: >
        Analyzes Kubernetes pod failures including crash loops, 
        OOM kills, and network connectivity issues. Returns 
        structured diagnosis with root cause and recommendations.
      parameters:
        - name: namespace
          type: string
          required: true
        - name: pod_name
          type: string
          required: false
          
    - name: check_cluster_health
      description: >
        Performs comprehensive cluster health check including 
        node status, resource utilization, and pending pods.
      parameters:
        - name: include_metrics
          type: boolean
          default: true
  
  # Resource requirements
  resources:
    cpu: "500m"
    memory: "512Mi"
    
  # Scaling configuration
  scaling:
    minReplicas: 1
    maxReplicas: 5
    targetCPUUtilization: 70`} />
      </div>

      {/* Writing Good Capabilities */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Writing Good Capability Descriptions</h2>
        <p className="text-muted-foreground mb-4">
          Capability descriptions are how Consonant's planner understands what your agent can do. 
          Better descriptions = better routing decisions.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-lg border border-destructive/30 bg-destructive/5">
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              Bad Example
            </h4>
            <code className="text-sm text-muted-foreground block">
              "Checks pods"
            </code>
            <p className="text-xs text-muted-foreground mt-2">
              Too vague. What does "check" mean? What kind of pods? What does it return?
            </p>
          </div>
          <div className="p-4 rounded-lg border border-primary/30 bg-primary/5">
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Good Example
            </h4>
            <code className="text-sm text-muted-foreground block">
              "Analyzes Kubernetes pod failures including crash loops, OOM kills, and network issues. Returns root cause and recommendations."
            </code>
            <p className="text-xs text-muted-foreground mt-2">
              Specific actions, clear scope, describes output format.
            </p>
          </div>
        </div>
        
        <div className="space-y-3">
          <Tip title="Be specific about what the agent does, not how">
            Focus on the outcome, not implementation details.
          </Tip>
          <Tip title="Include the types of inputs it handles">
            Mentioning "crash loops, OOM kills" helps routing.
          </Tip>
          <Tip title="Describe the output format">
            "Returns structured diagnosis" tells the planner what to expect.
          </Tip>
        </div>
      </div>

      {/* Agent Interface */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Agent Interface</h2>
        <p className="text-muted-foreground mb-4">
          Your agent must implement a simple gRPC or HTTP interface that Consonant calls:
        </p>
        
        <CodeBlock code={`# Example Python agent using gRPC
from consonant_sdk import AgentBase, capability

class DiagnosticAgent(AgentBase):
    
    @capability("diagnose_pod_issues")
    async def diagnose_pod(self, namespace: str, pod_name: str = None):
        """
        Consonant calls this when routing to diagnose_pod_issues capability.
        """
        # Your diagnostic logic here
        issues = await self.k8s_client.analyze_pods(namespace, pod_name)
        
        return {
            "status": "completed",
            "diagnosis": issues,
            "recommendations": self.generate_recommendations(issues)
        }
    
    @capability("check_cluster_health")
    async def check_health(self, include_metrics: bool = True):
        health = await self.k8s_client.get_cluster_health()
        if include_metrics:
            health["metrics"] = await self.get_prometheus_metrics()
        return health`} />
      </div>

      {/* Registering */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-foreground mb-4">Registering Your Agent</h2>
        <CodeBlock code={`# Apply the agent manifest
kubectl apply -f agent.yaml

# Verify registration
consonant agents list

# Output:
# NAME             NAMESPACE    STATUS    CAPABILITIES
# k8s-diagnostic   production   Ready     diagnose_pod_issues, check_cluster_health

# Test invocation
consonant agents invoke k8s-diagnostic \\
  --capability check_cluster_health \\
  --params '{"include_metrics": true}'`} />
      </div>

      {/* Next Steps */}
      <div className="p-6 rounded-xl border border-border bg-secondary/20">
        <h3 className="font-semibold text-foreground mb-4">Next Steps</h3>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/docs/guides/orchestration"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Learn Orchestration
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link 
            href="/docs/api/sdk"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary/50 transition-colors"
          >
            SDK Reference
            <ArrowRight className="w-4 h-4" />
          </Link>
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

function Tip({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/30">
      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
      <div>
        <span className="font-medium text-foreground text-sm">{title}</span>
        <span className="text-muted-foreground text-sm"> — {children}</span>
      </div>
    </div>
  )
}
