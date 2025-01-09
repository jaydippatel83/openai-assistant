import { parseEther } from "viem";
import { createViemWalletClient } from "../viem/createViemWalletClient";
import { ToolConfig } from "./allTools";


interface SendTransactionToolArgs {
    to: string;
    value?: string;
}

export const sendTransactionTool: ToolConfig<SendTransactionToolArgs> = {
    definition: {
        type: "function",
        function: {
            name: "send_transaction",
            description: "Send a ETH to an address",
            parameters: {
                type: "object",
                properties: {
                    to: {
                        type: "string",
                        pattern: "^0x[a-fA-F0-9]{40}$",
                        description: "The recipient address",
                    },
                    value: {
                        type: "string",
                        description: "The amount of ETH to send (in ETH, not wei)",
                        optional: true,
                    },
                },
                required: ["to"],
            },
        },
    },
    handler: async ({ to, value }: SendTransactionToolArgs) => {
        try {
            const client = createViemWalletClient();
            const txn  = await client.sendTransaction({
                to : to as `0x${string}`,
                value: value ? parseEther(value) : undefined,
            });
            return txn;
        } catch (error) {
            return error;
        }
    }
};
