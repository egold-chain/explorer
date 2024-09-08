import type { NFTTokenType, TokenType } from 'types/api/token';

import config from 'configs/app';

const tokenStandardName = config.chain.tokenStandard;

export const NFT_TOKEN_TYPES: Record<NFTTokenType, string> = {
  'EGC-721': `${ tokenStandardName }-721`,
  'EGC-1155': `${ tokenStandardName }-1155`,
  'EGC-404': `${ tokenStandardName }-404`,
};

export const TOKEN_TYPES: Record<TokenType, string> = {
  'EGC-20': `${ tokenStandardName }-20`,
  ...NFT_TOKEN_TYPES,
};

export const NFT_TOKEN_TYPE_IDS: Array<NFTTokenType> = [ 'EGC-721', 'EGC-1155', 'EGC-404' ];
export const TOKEN_TYPE_IDS: Array<TokenType> = [ 'EGC-20', ...NFT_TOKEN_TYPE_IDS ];

export function getTokenTypeName(typeId: TokenType) {
  return TOKEN_TYPES[typeId];
}
