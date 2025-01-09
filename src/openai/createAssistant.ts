import { OpenAI } from "openai"; 
import { Assistant } from "openai/resources/beta/assistants";
 
export async function createAssistant(client: OpenAI): Promise<Assistant> {
    return await client.beta.assistants.create({
        name: "My Ai Assistant",
        instructions: "You are a helpful assistant",
        model: "gpt-4o-mini",
        description: "This is my ai assistant",
        tools: [],
    });
}