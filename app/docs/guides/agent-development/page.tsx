import { DocHeader, CodeBlock, Callout, NextStepCard } from "../../doc-components"

export default function AgentDevelopmentPage() {
  return (
    <div>
      <DocHeader 
        title="Agent Development"
        description="Learn how to build, containerize, and register agents that can be orchestrated by Consonant."
        label="GUIDE"
      />

      <div className="prose prose-invert max-w-none text-muted-foreground">
        <p>
          Consonant is framework-agnostic. Your agents can be Python scripts, Node.js servers, 
          or compiled Go binaries. The only requirement is that they expose an HTTP endpoint 
          that accepts JSON input and returns JSON output.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">1. The Agent Interface</h2>
        <p>
          Every agent must expose a <code>POST /execute</code> endpoint. Consonant sends the task 
          context and parameters to this endpoint.
        </p>

        <CodeBlock code={`# Example: Simple Flask Agent
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok"})

@app.route('/execute', methods=['POST'])
def execute():
    data = request.json
    task = data.get('task')
    
    # ... Your agent logic here ...
    result = perform_task(task)
    
    return jsonify({
        "status": "success",
        "result": result,
        "metadata": {"cost": 0.002}
    })`} language="python" />

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">2. Defining Capabilities</h2>
        <p>
          To make your agent discoverable by the planner, you must define its capabilities 
          in a Kubernetes manifest.
        </p>

        <CodeBlock code={`apiVersion: consonant.dev/v1
kind: Agent
metadata:
  name: data-analyzer
spec:
  image: my-registry/data-analyzer:v1
  description: "Analyzes CSV and JSON datasets to extract insights"
  capabilities:
    - name: analyze_csv
      description: "Analyze a CSV file URL and return statistical summary"
      parameters:
        properties:
          url:
            type: string
            description: "URL to the CSV file"
    - name: generate_chart
      description: "Create a visualization from data"
  resources:
    cpu: "1"
    memory: "2Gi"`} language="yaml" />

        <Callout type="info" title="Prompt Engineering Tips">
          The <code>description</code> fields are critical. The Planner uses these descriptions 
          to match user goals to your agent. Be descriptive and specific about what the tool does.
        </Callout>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">3. Handling State</h2>
        <p>
          Consonant agents should ideally be <strong>stateless</strong>. Any context needed for the 
          task is passed in the request. If you need to persist state across invocations, 
          use an external database or the Consonant State Store API.
        </p>

        <h2 className="text-foreground text-2xl font-bold mt-12 mb-6">4. Error Handling</h2>
        <p>
          If your agent fails, return a non-200 status code or a JSON payload with 
          <code>status: "error"</code>. Consonant will automatically handle retries based on your 
          agent's configuration.
        </p>

        <CodeBlock code={`// Error Response Example
{
  "status": "error",
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Upstream API rate limit hit",
    "retryable": true
  }
}`} language="json" />

      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h3 className="font-semibold text-foreground mb-4">Next Steps</h3>
        <div className="grid sm:grid-cols-2 gap-4">
           <NextStepCard href="/docs/guides/orchestration" title="Orchestration" description="See how agents are coordinated" />
           <NextStepCard href="/docs/reference/api" title="API Reference" description="Full KAgent Protocol spec" />
        </div>
      </div>
    </div>
  )
}
