import { Table, Tbody, Th, Tr } from '@chakra-ui/react';
import React from 'react';

import type { TokenInfo } from 'types/api/token';
import type { TokenTransfer } from 'types/api/tokenTransfer';

import { AddressHighlightProvider } from 'lib/contexts/addressHighlight';
import { NFT_TOKEN_TYPE_IDS } from 'lib/token/tokenTypes';
import * as SocketNewItemsNotice from 'ui/shared/SocketNewItemsNotice';
import { default as Thead } from 'ui/shared/TheadSticky';
import TruncatedValue from 'ui/shared/TruncatedValue';
import TokenTransferTableItem from 'ui/token/TokenTransfer/TokenTransferTableItem';

interface Props {
  data: Array<TokenTransfer>;
  top: number;
  showSocketInfo: boolean;
  socketInfoAlert?: string;
  socketInfoNum?: number;
  tokenId?: string;
  isLoading?: boolean;
  token?: TokenInfo;
}

const TokenTransferTable = ({ data, top, showSocketInfo, socketInfoAlert, socketInfoNum, tokenId, isLoading, token }: Props) => {
  const tokenType = data[0].token.type;

  return (
    <AddressHighlightProvider>
      <Table variant="simple" size="sm" minW="950px">
        <Thead top={ top }>
          <Tr>
            <Th width="280px">Txn hash</Th>
            <Th width="200px">Method</Th>
            <Th width={ { lg: '224px', xl: '380px' } }>From/To</Th>
            { (NFT_TOKEN_TYPE_IDS.includes(tokenType)) &&
                <Th width={ tokenType === 'EGC-1155' || tokenType === 'EGC-404' ? '50%' : '100%' }>Token ID</Th>
            }
            { (tokenType === 'EGC-20' || tokenType === 'EGC-1155' || tokenType === 'EGC-404') && (
              <Th width={ tokenType === 'EGC-20' ? '100%' : '50%' } isNumeric>
                <TruncatedValue value={ `Value ${ token?.symbol || '' }` } w="100%" verticalAlign="middle"/>
              </Th>
            ) }
          </Tr>
        </Thead>
        <Tbody>
          { showSocketInfo && (
            <SocketNewItemsNotice.Desktop
              url={ window.location.href }
              alert={ socketInfoAlert }
              num={ socketInfoNum }
              type="token_transfer"
              isLoading={ isLoading }
            />
          ) }
          { data.map((item, index) => (
            <TokenTransferTableItem
              key={ item.tx_hash + item.block_hash + item.log_index + '_' + index }
              { ...item }
              tokenId={ tokenId }
              isLoading={ isLoading }
            />
          )) }
        </Tbody>
      </Table>
    </AddressHighlightProvider>
  );
};

export default React.memo(TokenTransferTable);
