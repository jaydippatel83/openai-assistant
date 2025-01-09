 
import { Address, formatEther } from "viem";
import { ToolConfig } from "./allTools";  
import { createViemClient } from "../viem/createViemClient";


interface GetBalanceArgs {
    walletAddress: Address;
}

export const getBalanceTool: ToolConfig<GetBalanceArgs> = {
    definition: {
        type: "function",
        function: {
            name: "get_balance",
            description: "Get the balance of a wallet address", 
            parameters: {
                type: "object",
                properties: {
                    walletAddress: {
                        type: "string",
                        pattern: "^0x[a-fA-F0-9]{40}$",
                        description: "The wallet address to get the balance of",
                    }
                },
                required: ["walletAddress"],
            },
        },
    },
    handler: async ({ walletAddress }) => {
        const client = createViemClient();
        const balance = await client.getBalance({ address: walletAddress });
        return formatEther(balance);
    }
};


