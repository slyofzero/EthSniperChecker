import Web3, { Web3BaseProvider } from "web3";
import { ethers } from "ethers";
import { RegisteredSubscription } from "web3/lib/commonjs/eth.exports";
import { log } from "@/utils/handlers";
import { ALCHEMY_API_KEY } from "@/utils/env";

const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;
const websocketURL = `wss://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`;

export let web3: Web3<RegisteredSubscription> | null = null;
export let wssProvider: Web3BaseProvider<unknown> | null = null;
export const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

export function rpcConfig() {
  wssProvider = new Web3.providers.WebsocketProvider(websocketURL);
  web3 = new Web3(wssProvider);
  log("Configured web3 and WSS provider");
}
