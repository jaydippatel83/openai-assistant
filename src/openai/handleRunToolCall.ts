import OpenAI from "openai";
import { Run } from "openai/resources/beta/threads/runs/runs.mjs";
import { Thread } from "openai/resources/beta/threads/threads";
import { tools } from "../tools/allTools";

export async function handleRunToolCall(client: OpenAI, run: Run, thread: Thread): Promise<Run> {
    const toolCalls = run.required_action?.submit_tool_outputs?.tool_calls;
    if (!toolCalls) return run;

    const toolOutputs = await Promise.all(
        toolCalls.map(async (tool) => {
            const toolConfig = tools[tool.function.name];
            if (!toolConfig) {
                console.log(`Tool ${tool.function.name} not found`);
                return null;
            }
            try {
                const args = JSON.parse(tool.function.arguments);
                const result = await toolConfig.handler(args);
                return {
                    tool_call_id: tool.id,
                    output: String(result),
                };
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                console.error(`Error calling tool ${tool.function.name}:`, errorMessage);
                return {
                    tool_call_id: tool.id,
                    output: `Error: ${errorMessage}`,
                };
            }
        })
    );

    const validToolOutputs = toolOutputs.filter(Boolean) as OpenAI.Beta.Threads.Runs.RunSubmitToolOutputsParams.ToolOutput[];
    if (validToolOutputs.length === 0) return run;
    return await client.beta.threads.runs.submitToolOutputsAndPoll(
        thread.id,
        run.id,
        {
            tool_outputs: validToolOutputs,
        }
    );
}