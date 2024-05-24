import { TokenAudit, TokenHolders } from "@/types";

const headers = new Headers();
headers.append("Host", "app.quickintel.io");
headers.append(
  "User-Agent",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0"
);
headers.append("Accept", "*/*");
headers.append("Accept-Language", "en-US,en;q=0.5");
headers.append("Accept-Encoding", "gzip, deflate, br");
headers.append("Content-Type", "application/json");
headers.append("Content-Length", "109");
headers.append("Sec-Fetch-Dest", "empty");
headers.append("Sec-Fetch-Mode", "cors");
headers.append("Sec-Fetch-Site", "cross-site");
headers.append("Sec-GPC", "1");
headers.append("Connection", "keep-alive");
headers.append("TE", "trailers");

export async function auditToken(token: string): Promise<TokenAudit> {
  const requestBody = {
    chain: "eth",
    tier: "basic",
    tokenAddress: token,
  };

  const response = await fetch(
    "https://app.quickintel.io/api/quicki/getquickiauditfull",
    { method: "POST", body: JSON.stringify(requestBody) }
  );
  const jsonData = await response.json();
  return jsonData;
}

export async function getTokenHolders(token: string): Promise<TokenHolders> {
  const tokenHoldersBody = {
    id: 1,
    jsonrpc: "2.0",
    method: "nr_getTokenHolders",
    params: [token, "0xA", "", "0xA"],
  };

  const tokenHoldersCountBody = {
    id: 1,
    jsonrpc: "2.0",
    method: "nr_getTokenHolderCount",
    params: [token],
  };

  const topHoldersPromise = fetch(
    "https://eth-mainnet.nodereal.io/v1/f3b37cc49d3948f5827621b8c2e0bdb3",
    { method: "POST", body: JSON.stringify(tokenHoldersBody) }
  );

  const holdersCountPromise = fetch(
    "https://eth-mainnet.nodereal.io/v1/f3b37cc49d3948f5827621b8c2e0bdb3",
    { method: "POST", body: JSON.stringify(tokenHoldersCountBody) }
  );

  const [topHolders, tokenHolders] = await Promise.all([
    topHoldersPromise,
    holdersCountPromise,
  ]);
  const [topHoldersJson, tokenHoldersJson] = await Promise.all([
    topHolders.json(),
    tokenHolders.json(),
  ]);
  const holders = topHoldersJson.result.details;
  const holdersCount = Number(tokenHoldersJson?.result?.result || 0);
  return { holdersCount, topHolders: holders };
}
