import { approveTokenAllowanceTool } from "./approveTokenAllowance";
import { deployErc20Tool } from "./deployTokenTool";
import { getBalanceTool } from "./getBalance";
import { getContractBytecodeTool } from "./getContractBytecode";
import { getTransactionReceiptTool } from "./getTransactionReceipt"; 
import { getWalletAddressTool } from "./getWalletAddress";
import { readContractTool } from "./readContract";
import { sendTransactionTool } from "./sendTransactionTool";
import { uniswapV3CreatePoolTool } from "./uniswapV3createPool";
import { writeContractTool } from "./writeSmartContract";

export interface ToolConfig<T = any> {
    definition: {
        type: "function";
        function: {
            name: string;
            description: string;
            parameters: {
                type: 'object';
                properties: Record<string, unknown>;
                required: string[];
            };
        }
    };
    handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
    get_balance: getBalanceTool,
    get_wallet_address: getWalletAddressTool,
    send_transaction: sendTransactionTool,
    deploy_erc20_token: deployErc20Tool,
    write_contract_smart_contract: writeContractTool,
    uniswap_v3_create_pool: uniswapV3CreatePoolTool,  
    approve_token_allowance: approveTokenAllowanceTool,
    get_contract_bytecode: getContractBytecodeTool,
    get_transaction_receipt: getTransactionReceiptTool,
    read_contract: readContractTool,
};
