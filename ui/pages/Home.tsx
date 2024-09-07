import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import ChainIndicators from 'ui/home/indicators/ChainIndicators';
import LatestArbitrumL2Batches from 'ui/home/latestBatches/LatestArbitrumL2Batches';
import LatestZkEvmL2Batches from 'ui/home/latestBatches/LatestZkEvmL2Batches';
import LatestBlocks from 'ui/home/LatestBlocks';
import Stats from 'ui/home/Stats';
import Transactions from 'ui/home/Transactions';
import AdBanner from 'ui/shared/ad/AdBanner';
import ProfileMenuDesktop from 'ui/snippets/profileMenu/ProfileMenuDesktop';
import SearchBar from 'ui/snippets/searchBar/SearchBar';
import WalletMenuDesktop from 'ui/snippets/walletMenu/WalletMenuDesktop';

const rollupFeature = config.features.rollup;

const Home = () => {
  return (
    <Box as="main">
      <Flex
        w="100%"
        background={ config.UI.homepage.plate.background }
        borderRadius="md"
        p={{ base: 6, lg: 12 }}
        columnGap={ 8 }
        alignItems="center"
        data-label="hero plate"
      >
        <Box flexGrow={ 1 }>
          <Flex
            mb={{ base: 2, lg: 3 }}
            justifyContent="space-between"
            alignItems="center"
            columnGap={ 2 }
          >
            <Heading
              as="h1"
              fontSize={{ base: '24px', lg: '40px' }}
              lineHeight={{ base: '24px', lg: '50px' }}
              fontWeight={{ base: 'inherit', lg: '500' }}
              letterSpacing={{ base: '-1px', lg: '-1px' }}
              color={ config.UI.homepage.plate.textColor }
            >
              { config.meta.seo.enhancedDataEnabled ?
                `${ config.chain.name } blockchain explorer` :
                `${ config.chain.name } explorer` }
            </Heading>
            { config.UI.navigation.layout === 'vertical' && (
              <Box display={{ base: 'none', lg: 'flex' }}>
                { config.features.account.isEnabled && (
                  <ProfileMenuDesktop isHomePage/>
                ) }
                { config.features.blockchainInteraction.isEnabled && (
                  <WalletMenuDesktop isHomePage/>
                ) }
              </Box>
            ) }
          </Flex>
          <Heading
            as="h2"
            fontSize={{ base: '14px', lg: '18px' }}
            lineHeight={{ base: '20px', lg: '24px' }}
            fontWeight={{ base: 500 }}
            mb={{ base: 6 }}
            color={ config.UI.homepage.plate.textColor }
          >
            Shaping Tomorrow, Steering the Blockchain Revolution with Accuracy
            and Vision.
          </Heading>
          <SearchBar isHomepage/>
        </Box>
        <AdBanner
          platform="mobile"
          w="fit-content"
          flexShrink={ 0 }
          borderRadius="md"
          overflow="hidden"
          display={{ base: 'none', lg: 'block ' }}
        />
      </Flex>
      <Flex
        flexDir={{ base: 'column', lg: 'column' }}
        columnGap={ 2 }
        rowGap={ 3 }
        mt={ 3 }
        _empty={{ mt: 0 }}
      >
        <Stats/>
        <ChainIndicators/>
      </Flex>
      <AdBanner
        mt={ 6 }
        mx="auto"
        display={{ base: 'flex', lg: 'none' }}
        justifyContent="center"
      />
      <Flex
        mt={ 8 }
        direction={{ base: 'column', lg: 'row' }}
        columnGap={ 12 }
        rowGap={ 6 }
      >
        { rollupFeature.isEnabled && rollupFeature.type === 'zkEvm' && (
          <LatestZkEvmL2Batches/>
        ) }
        { rollupFeature.isEnabled && rollupFeature.type === 'arbitrum' && (
          <LatestArbitrumL2Batches/>
        ) }
        { !(
          rollupFeature.isEnabled &&
          (rollupFeature.type === 'arbitrum' || rollupFeature.type === 'zkEvm')
        ) && <LatestBlocks/> }
        <Box flexGrow={ 1 }>
          <Transactions/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
