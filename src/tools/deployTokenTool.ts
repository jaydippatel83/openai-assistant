import { createViemWalletClient } from "../viem/createViemWalletClient";
import { createViemClient } from "../viem/createViemClient";
import { ToolConfig } from "./allTools";
import { parseEther } from "viem";
import { ERC20_ABI, ERC20_BYTECODE } from "../utils/contractDetails";
import { baseSepolia } from "viem/chains";

interface DeployTokenToolArgs {
    name: string;
    symbol: string;
    initialSupply?: string;
} 

export const deployTokenTool: ToolConfig<DeployTokenToolArgs> = {
    definition: {
        type: "function",
        function: {
            name: "deploy_erc20_token",
            description: "Deploy a new ERC20 token contract on Base Sepolia",
            parameters: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "The name of the token",
                    },
                    symbol: {
                        type: "string",
                        description: "The symbol of the token",
                    },
                    initialSupply: {
                        type: "string",
                        description: "Initial supply of tokens (in whole tokens, not wei). Defaults to 1 billion if not specified",
                        optional: true,
                    },
                },
                required: ["name", "symbol"],
            },
        },
    },
    handler: async ({ name, symbol, initialSupply }: DeployTokenToolArgs) => {
        try {
            const client = createViemWalletClient();
            const publicClient = createViemClient();  
            const supply = BigInt(initialSupply || 1000000000);

            const hash = await client.deployContract({
                account: client.account.address,
                abi: ERC20_ABI,
                bytecode: ERC20_BYTECODE,
                args: [name, symbol, supply],
                chain: baseSepolia,
            }); 
            console.log("Deploying token with hash:", hash);
            const receipt = await publicClient.waitForTransactionReceipt({ hash });
            console.log("Transaction receipt:", receipt);
            if (!receipt.contractAddress) {
                throw new Error("Failed to deploy token");
            } 
            return {
                contractAddress: receipt.contractAddress,
                transactionHash: hash,
            };
        } catch (error) {
            return error;
        }
    }
}; 