"use client"

import { useState } from "react"
import { Terminal, Copy, Check, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CodeDemo() {
  const [copied, setCopied] = useState<number | null>(null)
  
  const steps = [
    {
      title: "1. Deploy Consonant",
      description: "Install the control plane in your Kubernetes cluster",
      code: `# Add the Consonant Helm repository
helm repo add consonant https://charts.consonant.dev

# Install the control plane
helm install consonant consonant/consonant \\
  --namespace consonant-system \\
  --create-namespace

# Verify the installation
kubectl get pods -n consonant-system`,
    },
    {
      title: "2. Register Your Agents",
      description: "Declare agent capabilities using YAML manifests",
      code: `# agent-manifest.yaml
apiVersion: consonant.dev/v1
kind: Agent
metadata:
  name: k8s-diagnostic
spec:
  image: mycompany/k8s-diagnostic:v1.2
  capabilities:
    - name: diagnose_pod_issues
      description: "Analyze pod failures and resource issues"
    - name: check_cluster_health
      description: "Verify overall cluster health metrics"
  resources:
    cpu: "500m"
    memory: "512Mi"`,
    },
    {
      title: "3. Submit Goals",
      description: "Let Consonant orchestrate your agents automatically",
      code: `# Submit a goal - Consonant handles the rest
consonant run --goal "Pod crashing in production, diagnose and fix"

# Track workflow status
consonant workflow status run_abc123

# View execution trace
consonant trace view run_abc123

# Approve pending actions (if policy requires)
consonant approve pending`,
    },
  ]

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px] -translate-y-1/2" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6">
            <Terminal className="w-3.5 h-3.5" />
            QUICKSTART
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">
            Deploy in Minutes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Get from zero to orchestrated agents in three steps.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(step.code, index)}
                  className="gap-2 text-muted-foreground hover:text-primary"
                >
                  {copied === index ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
              
              {/* Code Block */}
              <div className="bg-secondary/30">
                <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <pre className="p-5 overflow-x-auto">
                  <code className="text-sm font-mono text-foreground/90 leading-relaxed whitespace-pre">
                    {step.code}
                  </code>
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base glow-border">
            <a href="/docs" className="flex items-center gap-2">
              Read Full Documentation
              <Play className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
