"use client"

import { DocHeader, Callout, CodeBlock } from "../../doc-components"

export default function TestingPage() {
  return (
    <div className="max-w-4xl">
      <DocHeader 
        title="Testing Strategies"
        description="Unit and Integration testing for Micro-Agents."
        label="Agent Development"
      />

      <div className="prose prose-invert max-w-none">
        <h2>Unit Testing</h2>
        <p>
            Since agents are just simple web servers, you can test them with standard tools (pytest, jest).
        </p>

        <CodeBlock language="python" code={`def test_agent_logic():
    agent = Agent()
    result = agent.process({"input": "test"})
    assert result["status"] == "success"`} />

        <h2>Integration Testing</h2>
        <p>
            Testing how agents interact is harder. Use the <code>cons test</code> command.
        </p>

        <CodeBlock language="bash" code={`# Run a test workflow against a local cluster
cons test ./tests/integration-suite.yaml`} />

        <p>
            This spins up a temporary namespace, deploys your agents, runs the workflow, and asserts the output.
        </p>
      </div>
    </div>
  )
}
