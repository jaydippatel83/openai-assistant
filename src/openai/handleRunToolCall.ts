import OpenAI from "openai";
import { Run } from "openai/resources/beta/threads/runs/runs.mjs";
import { Thread } from "openai/resources/beta/threads/threads";

export async function handleRunToolCall(client: OpenAI, run: Run, thread: Thread): Promise<Run> {
     return run;
}