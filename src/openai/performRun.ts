import { OpenAI } from "openai";
import { Run } from "openai/resources/beta/threads/runs/runs";
import { Thread } from "openai/resources/beta/threads/threads";
import { handleRunToolCall } from "./handleRunToolCall";

export async function performRun(client: OpenAI, run: Run, thread: Thread) {

    while (run.status === "requires_action") {
        run = await handleRunToolCall(client, run, thread);
    }

    if (run.status === "failed") {
        const errorMessage = `I encountered an error: ${run?.last_error?.message || "Unknown error"}`;
        console.log(errorMessage);
        await client.beta.threads.messages.create(thread.id, {
            role: "assistant",
            content: errorMessage
        });
        return {
            type: 'text',
            text: {
                value: errorMessage,
                annotations: []
            },
        };
    }

    const message = await client.beta.threads.messages.list(thread.id);
    const assistantMessage = message.data.find(m => m.role === "assistant");
    return assistantMessage?.content[0] || {
        type: "text",
        text: {
            value: "No Response from Assistant",
            annotations: []
        }
    };
}