interface AccountBalance {
  accountAddress: string;
  tokenBalance: string;
}

export interface TokenHolders {
  holdersCount: number;
  topHolders: AccountBalance[];
}
