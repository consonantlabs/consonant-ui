import { DocHeader, Callout } from "../doc-components"

export default function WhyConsonantPage() {
  return (
    <div>
      <DocHeader 
        title="Why Consonant?"
        description="Comparing Consonant to other approaches for building multi-agent systems."
        label="COMPARISON"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        
        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">vs. Just using LangChain/LangGraph</h2>
        <p>
          LangChain and LangGraph are excellent frameworks for <em>building</em> agents. Consonant is for 
          <em>orchestrating</em> them in production.
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>LangChain:</strong> Provides the cognitive architecture (prompt templates, chains).</li>
          <li><strong>Consonant:</strong> Provides the infrastructure (scaling, policy enforcement, multi-tenancy, audit logs).</li>
        </ul>
        <Callout type="info" title="Better Together">
          We recommend building agents with LangGraph and deploying them with Consonant.
        </Callout>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">vs. Home-grown "Glue Code"</h2>
        <p>
          Many teams start by wrapping agents in FastAPI and calling them sequentially. 
          This works for 2 agents but breaks at 10.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
           <div className="p-4 border border-destructive/30 bg-destructive/5 rounded-lg">
             <div className="font-bold text-destructive mb-2">Home-grown</div>
             <ul className="text-sm space-y-1 list-disc pl-4">
                <li>Brittle peer-to-peer connections</li>
                <li>No centralized observability</li>
                <li>Hard-coded routing logic</li>
                <li>Redeploy everything to change flow</li>
             </ul>
           </div>
           <div className="p-4 border border-primary/30 bg-primary/5 rounded-lg">
             <div className="font-bold text-primary mb-2">Consonant</div>
             <ul className="text-sm space-y-1 list-disc pl-4">
                <li>Dynamic central orchestration</li>
                <li>Distributed tracing out-of-the-box</li>
                <li>Policy-based governance</li>
                <li>Hot-swappable agent capabilities</li>
             </ul>
           </div>
        </div>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">vs. Temporal / Airflow</h2>
        <p>
          Temporal and Airflow are general-purpose workflow engines. They are deterministic and 
          code-first. Consonant is <strong>probabilistic and goal-first</strong>.
        </p>
        <p className="mt-4">
          In Temporal, you define the exact steps. In Consonant, you define the <em>goal</em>, and 
          the planner figures out the steps based on available tools. This allows Consonant to 
          handle the ambiguity and non-determinism inherent in GenAI workflows.
        </p>

      </div>
    </div>
  )
}
