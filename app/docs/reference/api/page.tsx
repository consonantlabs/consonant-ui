import { DocHeader, CodeBlock } from "../../doc-components"

export default function ApiReferencePage() {
  return (
    <div>
      <DocHeader 
        title="API Reference"
        description="Interact with the Consonant Control Plane programmatically."
        label="REFERENCE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          The Consonant API is RESTful and served on port <code>8080</code> by default in the 
          control plane pod.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Authentication</h2>
        <p>
          Authenticate using a Bearer token.
        </p>
        <CodeBlock code={`curl -H "Authorization: Bearer <token>" https://api.consonant.dev/v1/agents`} />

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">OpenAPI Spec</h2>
        <p>
          The full OpenAPI specification is available at <code>/openapi.json</code> on the control plane.
        </p>
        
        <div className="my-8 p-4 border border-border rounded-lg bg-card">
           <p className="text-center italic text-muted-foreground">
             Interactive Swagger UI documentation would appear here in a full implementation.
           </p>
        </div>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Endpoints</h2>
        
        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">POST /v1/workflows</h3>
        <p>Create a new workflow based on a goal.</p>
        <CodeBlock code={`POST /v1/workflows
{
  "goal": "string",
  "context": {}
}`} language="json" />

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">GET /v1/workflows/{`{id}`}</h3>
        <p>Get workflow status and plan.</p>

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">GET /v1/agents</h3>
        <p>List registered agents.</p>

      </div>
    </div>
  )
}
