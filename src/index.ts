import { OpenAI } from "openai";
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { config } from "dotenv";
import { performRun } from "./openai/performRun";
import * as readline from 'readline';

config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    }); 
    console.log("Welcome to the AI Assistant! Type 'exit' to quit.");
    
    while (true) {
        const message = await askQuestion("\nEnter your message: ");
        
        if (message.toLowerCase() === 'exit') {
            console.log("Goodbye!");
            rl.close();
            break;
        }

        console.log("\nProcessing your request...");
        const assistant = await createAssistant(client);
        const thread = await createThread(client, message);
        const run = await createRun(client, thread, assistant.id);
        const result = await performRun(client, run, thread);
        console.log("\nAssistant Response:");
        console.log(result);
    }
}

main().catch((error) => {
    console.error("An error occurred:", error);
    rl.close();
});