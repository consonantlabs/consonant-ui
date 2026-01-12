import { DocHeader, CodeBlock, Callout, NextStepCard } from "../../doc-components"
import { Box, GitBranch, RefreshCw } from "lucide-react"

export default function OrchestrationPage() {
  return (
    <div>
      <DocHeader 
        title="Orchestration Engine"
        description="How Consonant decomposes high-level goals into executable plans using LangGraph and dynamic routing."
        label="GUIDE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          At the heart of Consonant is a reasoning engine powered by <strong>LangGraph</strong>. 
          Unlike traditional workflow engines (Airflow, Temporal) that execute static DAGs, 
          Consonant builds the DAG at runtime based on the goal.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">How Planning Works</h2>
        
        <div className="p-6 rounded-xl border border-border bg-secondary/10 mb-8">
           <ol className="list-decimal pl-6 space-y-4">
             <li>
               <strong>Intent Analysis:</strong> The Planner (LLM) analyzes the user's goal string.
             </li>
             <li>
               <strong>Capability Matching:</strong> It searches the registry for agents with semantic relevance.
             </li>
             <li>
               <strong>Plan Generation:</strong> It constructs a step-by-step plan, identifying dependencies.
             </li>
             <li>
               <strong>Execution & refinement:</strong> Steps are executed. If a step fails, the planner observes the error and re-plans.
             </li>
           </ol>
        </div>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Running a Workflow</h2>
        <p>
          You can trigger workflows via the CLI or the REST API.
        </p>

        <CodeBlock code={`consonant run --goal "Analyze Q3 sales data and generate a forecast chart"`} />

        <p>
          Behind the scenes, Consonant might generate a plan like this:
        </p>

        <CodeBlock code={`[PLAN]
1. data-analyzer: extract_sales_data(quarter="Q3")
2. data-analyzer: generate_forecast(data=$1)
3. chart-renderer: create_line_chart(data=$2)`} language="text" />

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Handling Failures</h2>
        <p>
          Consonant automatically handles agent failures. You can configure retry policies 
          at the global or agent level.
        </p>

        <Callout type="success" title="Self-Correction">
          Because the orchestration is LLM-driven, Consonant can often "reason" its way out of errors. 
          For example, if an agent returns "Invalid Date Format", the planner might try again with a corrected format 
          without human intervention.
        </Callout>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">Parallel Execution</h2>
        <p>
          Independent steps are automatically executed in parallel. The planner identifies 
          which tasks do not depend on each other and schedules them concurrently to minimize latency.
        </p>

      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Next Steps</h3>
        <div className="grid sm:grid-cols-2 gap-4">
           <NextStepCard href="/docs/guides/policy-enforcement" title="Policy Enforcement" description="Control what agents can do" />
           <NextStepCard href="/docs/guides/observability" title="Observability" description="Trace execution flows" />
        </div>
      </div>
    </div>
  )
}
