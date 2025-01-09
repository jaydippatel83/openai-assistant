import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";

export function createViemClient() {
    return createPublicClient({
        chain: baseSepolia,
        transport: http(),
    });
}