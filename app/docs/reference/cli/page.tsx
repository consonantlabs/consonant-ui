import { DocHeader, CodeBlock } from "../../doc-components"

export default function CliReferencePage() {
  return (
    <div>
      <DocHeader 
        title="CLI Reference"
        description="Command line interface for managing Consonant workflows, agents, and policies."
        label="REFERENCE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Installation</h2>
        <CodeBlock code={`curl -fsSL https://get.consonant.dev | sh`} />

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Core Commands</h2>
        
        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">consonant run</h3>
        <p>Submit a goal for execution.</p>
        <CodeBlock code={`consonant run --goal "Create a marketing plan for Q4"`} />

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">consonant agents list</h3>
        <p>List all registered agents and their status.</p>
        <CodeBlock code={`consonant agents list -n default`} />

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">consonant workflow status</h3>
        <p>Get the status and plan of a specific workflow.</p>
        <CodeBlock code={`consonant workflow status <workflow-id>`} />

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">consonant approvals list</h3>
        <p>See pending human-in-the-loop requests.</p>
        <CodeBlock code={`consonant approvals list`} />

        <h3 className="text-foreground text-xl font-semibold mt-8 mb-4">consonant approvals approve</h3>
        <p>Approve a pending request.</p>
        <CodeBlock code={`consonant approvals approve <request-id> --comment "Looks good"`} />

      </div>
    </div>
  )
}
