import { ToolConfig } from "./allTools"; 
import { createViemWalletClient } from "../viem/createViemWalletClient";

export const getWalletAddressTool: ToolConfig = {
    definition: {
        type: "function",
        function: {
            name: "get_wallet_address",
            description: "Get the AI bot's connected wallet address",
            parameters: {
                type: "object",
                properties: {},
                required: [],
            },
        },
    },
    handler: async () => {
        const client = createViemWalletClient();  
        return client?.account?.address;
    }
};