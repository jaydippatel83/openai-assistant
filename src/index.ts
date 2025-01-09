import { OpenAI } from "openai";
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";

async function main() {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const message = "Hello, how are you?";
    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);
    console.log(assistant);
    console.log(thread);
}

main();
