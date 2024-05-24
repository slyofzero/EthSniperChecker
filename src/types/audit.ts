interface TokenDetails {
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  tokenLogo: string | null;
  tokenOwner: string;
  tokenSupply: number;
  tokenCreatedDate: number;
  quickiTokenHash: {
    exact_qHash: string;
    similar_qHash: string;
  };
}

interface TokenDynamicDetails {
  lastUpdatedTimestamp: number;
  is_Honeypot: boolean;
  buy_Tax: number | null;
  sell_Tax: number | null;
  transfer_Tax: number | null;
  has_Trading_Cooldown: boolean;
  post_Cooldown_Tax: number | null;
  max_Transaction: number | null;
  max_Transaction_Percent: number | null;
  max_Wallet: number | null;
  max_Wallet_Percent: number | null;
  token_Supply_Burned: number | null;
  lp_Pair: string | null;
  lp_Supply: number | null;
  lp_Burned_Percent: number | null;
  lp_Locks: string | null;
  price_Impact: number | null;
  problem: boolean;
  extra: string;
}

interface QuickiAudit {
  contract_Creator: string;
  contract_Owner: string;
  contract_Name: string;
  contract_Chain: string;
  contract_Address: string;
  contract_Renounced: boolean;
  hidden_Owner: boolean;
  hidden_Owner_Modifiers: string | null;
  is_Proxy: boolean;
  proxy_Implementation: string | null;
  has_External_Contract_Risk: boolean;
  external_Contracts: string | null;
  has_Obfuscated_Address_Risk: boolean;
  obfuscated_Address_List: string | null;
  can_Mint: boolean;
  cant_Mint_Renounced: string | null;
  can_Burn: boolean;
  can_Blacklist: boolean;
  cant_Blacklist_Renounced: boolean;
  can_MultiBlacklist: boolean;
  can_Whitelist: boolean;
  cant_Whitelist_Renounced: string | null;
  can_Update_Fees: boolean;
  cant_Update_Fees_Renounced: string | null;
  can_Update_Max_Wallet: boolean;
  cant_Update_Max_Wallet_Renounced: string | null;
  can_Update_Max_Tx: boolean;
  cant_Update_Max_Tx_Renounced: string | null;
  can_Pause_Trading: boolean;
  cant_Pause_Trading_Renounced: boolean;
  has_Trading_Cooldown: boolean;
  can_Update_Wallets: boolean;
  has_Suspicious_Functions: boolean;
  has_External_Functions: boolean;
  has_Fee_Warning: boolean | null;
  has_ModifiedTransfer_Warning: boolean;
  modified_Transfer_Functions: string | null;
  suspicious_Functions: string | null;
  external_Functions: string | null;
  has_Scams: boolean;
  matched_Scams: string | null;
  scam_Functions: string | null;
  contract_Links: string[];
  functions: string[];
  onlyOwner_Functions: string[];
  multiBlacklistFunctions: string | null;
  has_General_Vulnerabilities: boolean;
  general_Vulnerabilities: string | null;
  fee_Update_Functions: string | null;
}

export interface TokenAudit {
  tokenDetails: TokenDetails;
  tokenDynamicDetails: TokenDynamicDetails;
  isScam: boolean | null;
  contractVerified: boolean;
  quickiAudit: QuickiAudit;
  projectVerified: boolean;
  projectVerifiDescription: string | null;
  kycVerifications: string | null;
  externalAudits: string | null;
  extraLinks: string | null;
}
