"use client"

import { DocHeader, Callout, CodeBlock, NextStepCard } from "../../doc-components"

export default function RunWorkflowPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Running a Workflow"
        description="Executing your first multi-agent workflow via the CLI."
        label="Getting Started"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Prerequisites</h2>
        <p>
            Ensure you have deployed your agents as described in the <a href="/docs/getting-started/deploy-agent">Deployment Guide</a>.
        </p>

        <h2>Command Structure</h2>
        <p>
            Workflows are triggered using the <code>cons run</code> command.
        </p>

        <CodeBlock language="bash" code={`cons run [OPTIONS] --goal "YOUR GOAL HERE"`} />

        <h3>Flags</h3>
        <ul>
            <li><code>--stream</code>: Stream logs to the console in real-time.</li>
            <li><code>--async</code>: Submit the workflow and return immediately (returns a Run ID).</li>
            <li><code>--context</code>: Pass a JSON file with initial context.</li>
        </ul>

        <h2>Example: Research & Report</h2>
        <p>
            Let's run a workflow that uses the <code>Researcher</code> and <code>Writer</code> agents.
        </p>

        <CodeBlock language="bash" code={`cons run --goal "Research the impact of quantum computing on cryptography and write a summary blog post." --stream`} />

        <p>
            You will see output similar to:
        </p>

        <div className="bg-card/50 p-4 rounded-xl border border-border font-mono text-xs mb-6">
            <div className="text-muted-foreground">[PLANNER] Goal analyzed. Generated 2 steps.</div>
            <div className="text-muted-foreground">[STEP 1] Routing to <span className="text-cyan-400">service/researcher</span>...</div>
            <div className="text-muted-foreground">[RESEARCHER] Searching Arxiv... Found 5 papers.</div>
            <div className="text-muted-foreground">[STEP 1] Completed. Output size: 15KB.</div>
            <div className="text-muted-foreground">[STEP 2] Routing to <span className="text-green-400">service/writer</span>...</div>
            <div className="text-muted-foreground">[WRITER] Drafting content...</div>
            <div className="text-foreground font-bold mt-2">Final Result:</div>
            <div className="text-foreground">Quantum computing poses a significant threat to RSA encryption...</div>
        </div>

        <Callout type="success" title="Success">
            If you see the final output, your control plane and agents are communicating correctly!
        </Callout>

        <div className="grid sm:grid-cols-2 gap-4 not-prose mt-12">
          <NextStepCard 
            href="/docs/debugging/distributed"
            title="Debugging"
            description="What if something goes wrong?"
          />
          <NextStepCard 
            href="/docs/introduction/concepts"
            title="Concepts"
            description="Understand what just happened."
          />
        </div>
      </div>
    </div>
  )
}
