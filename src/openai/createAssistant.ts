import { OpenAI } from "openai"; 
import { Assistant } from "openai/resources/beta/assistants";
import { tools } from "../tools/allTools";
import { chainGuideInstructions } from "../utils/instructions";
 
export async function createAssistant(client: OpenAI): Promise<Assistant> {
    return await client.beta.assistants.create({
        name: "Chain Guide Assistant",
        instructions: chainGuideInstructions,
        model: "gpt-4o-mini",
        description: "An AI assistant specialized in helping users understand and work with AI chains, providing guidance on chain creation, optimization, and best practices.",
        tools: Object.values(tools).map(tool => tool.definition),
    });
}