import { MenuEntry } from '@pepperswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      // {
      //   label: 'LP Migration',
      //   href: '/migrate',
      // },
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: '/pool',
      // },
    ],
  },
  {
    label: 'Farms - Coming Soon',
    icon: 'FarmIcon',
    href: 'http://dex.digiswap.finance/farms',
  },
  {
    label: 'Pools - Coming Soon',
    icon: 'PoolIcon',
    href: 'http://dex.digiswap.finance/pools',
  },
  // {
  //   label: 'Prediction (BETA)',
  //   icon: 'PredictionsIcon',
  //   href: 'https://pancakeswap.finance/prediction',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://pancakeswap.finance/lottery',
  // },
  // {
  //   label: 'Collectibles',
  //   icon: 'NftIcon',
  //   href: 'https://pancakeswap.finance/nft',
  // },
  // {
  //   label: 'Team Battle',
  //   icon: 'TeamBattleIcon',
  //   href: 'https://pancakeswap.finance/competition',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pancakeswap.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pancakeswap.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pancakeswap.finance/profile',
  //     },
  //   ],
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'Overview',
  //       href: 'https://pancakeswap.info',
  //     },
  //     {
  //       label: 'Tokens',
  //       href: 'https://pancakeswap.info/tokens',
  //     },
  //     {
  //       label: 'Pairs',
  //       href: 'https://pancakeswap.info/pairs',
  //     },
  //     {
  //       label: 'Accounts',
  //       href: 'https://pancakeswap.info/accounts',
  //     },
  //   ],
  // },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Contact',
      //   href: 'https://docs.pancakeswap.finance/contact-us',
      // },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      // {
      //   label: 'Github',
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: 'Docs',
      //   href: 'https://docs.pancakeswap.finance',
      // },
      // {
      //   label: 'Blog',
      //   href: 'https://pancakeswap.medium.com',
      // },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
      {
        label: 'Deployer Address',
        href: 'https://testnet.bscscan.com/address/0x01e206c70de38932C6b65270C8EeEc88e2349c64',
      },
      {
        label: 'Router V2 Contract',
        href: 'https://testnet.bscscan.com/address/0x57fFd1042E67103831e1bcA49303EF11EFDF25fe#code',
      },
      {
        label: 'Factory Contract',
        href: 'https://testnet.bscscan.com/address/0x907599f24Fc6D3DED757cE99688A15FCbdD72817#code',
      },
      {
        label: 'WETH (WBNB)',
        href: 'https://testnet.bscscan.com/address/0xd4F18F9E1981211b56E183D31916Fb0E7ba40FB0',
      },
      {
        label: 'DigiSwap Token (DGP)',
        href: 'https://testnet.bscscan.com/address/0x9bcc3Be62Db13E7E4A9caFF4cb29B2fAD156BcEE',
      },
      {
        label: 'BUSD Token (BUSD)',
        href: 'https://testnet.bscscan.com/address/0xbaca21E2D472301013eBc35f4043636F1813fCB3',
      },
      {
        label: 'DAI Token (DAI)',
        href: 'https://testnet.bscscan.com/address/0xBff43aEBCeE2D132bad042629a59fa52d964281b',
      },
      {
        label: 'ETH Token (ETH)',
        href: 'https://testnet.bscscan.com/address/0xA83FC928C4cB9D7034e2B5c4491E1517701e078E',
      },
      {
        label: 'USDT Token (USDT)',
        href: 'https://testnet.bscscan.com/address/0x9154C6EE1Ad8cD1B9E18614137dc2e377Aab931C',
      },
    ],
  },
]

export default config
