import { OpenAI } from "openai";
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { config } from "dotenv";
import { performRun } from "./openai/performRun";

config();

async function main() {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const message = "Hello, how are you?";
    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);
    const run = await createRun(client, thread, assistant.id);
    const result = await performRun(client, run, thread);
    console.log(result);
}

main();