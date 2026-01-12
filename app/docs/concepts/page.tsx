import { DocHeader, Callout } from "../doc-components"

export default function ConceptsPage() {
  return (
    <div>
      <DocHeader 
        title="Core Concepts"
        description="Understand the vocabulary and mental model of Consonant."
        label="CONCEPTS"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">The Planner</h2>
        <p>
          The brain of the system. An LLM-powered engine (built on LangGraph) that takes a high-level 
          user goal and breaks it down into a DAG (Directed Acyclic Graph) of tasks. It is responsible 
          for error handling, replanning, and final response synthesis.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Agents</h2>
        <p>
          Autonomous services that can perform tasks. In Consonant, an "Agent" is a Kubernetes 
          service that implements the KAgent protocol. Agents have <strong>Capabilities</strong> (Tools) 
          that they expose to the Planner.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Capabilities (Tools)</h2>
        <p>
          Discrete actions an agent can perform, e.g., "search_web", "query_database", "refund_user". 
          These are defined in the Agent Manifest and include JSON schemas for their inputs.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Policies</h2>
        <p>
          Rules that govern agent behavior. Policies are written in Rego and enforced by OPA. 
          They act as guardrails, preventing agents from taking unauthorized or dangerous actions.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Workflows (Runs)</h2>
        <p>
          A single execution instance of a goal. A workflow contains the Plan, the Execution Trace, 
          and the final Outcome. Workflows are stateful and resumable.
        </p>

        <Callout type="info" title="State Management">
          Workflow state is persisted in PostgreSQL, allowing Consonant to recover from control plane 
          failures without losing active workflows.
        </Callout>

      </div>
    </div>
  )
}
