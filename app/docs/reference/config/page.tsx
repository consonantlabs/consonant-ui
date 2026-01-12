import { DocHeader, CodeBlock } from "../../doc-components"

export default function ConfigReferencePage() {
  return (
    <div>
      <DocHeader 
        title="Configuration Reference"
        description="Configure Consonant via Helm values."
        label="REFERENCE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Helm Values</h2>
        <p>
          The <code>values.yaml</code> file controls the deployment of the control plane and related services.
        </p>

        <CodeBlock code={`# consonants-values.yaml

global:
  environment: "production"
  region: "us-east-1"

controlPlane:
  replicas: 3
  resources:
    requests:
      cpu: "1"
      memory: "2Gi"
  
  # LLM Configuration for Planner
  llm:
    provider: "openai"
    model: "gpt-4o"
    apiKeySecret: "consonant-secrets"

persistence:
  postgres:
    enabled: true
    storageClass: "gp2"
    size: "50Gi"

observability:
  enabled: true
  otlpBox: "http://otel-collector:4317"`} language="yaml" />

      </div>
    </div>
  )
}
