import React from 'react'
import { Text, Flex, Box, ErrorIcon } from '@pepperswap-libs/uikit'
import Banner from './Banner'

const MigrationV2 = () => {
  return (
    <Banner
      title={
        <Flex alignItems="center">
          <ErrorIcon color="white" width="32px" mr="16px" />
          <Text color="white" fontSize="24px" bold>
            DigiSwap ON TESTNET!
          </Text>
        </Flex>
      }
    >
      <Box ml="48px">
        <Text color="warning" bold>
            DigiSwap Testnet instance working with router addr
            &#39;0x57fFd1042E67103831e1bcA49303EF11EFDF25fe&#39;.
        </Text>
      </Box>
    </Banner>
  )
}

export default MigrationV2
