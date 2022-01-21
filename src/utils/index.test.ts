import { BigNumber } from '@ethersproject/bignumber'
import { AddressZero } from '@ethersproject/constants'
import { TokenAmount, Token, ChainId, Percent, JSBI } from '@digiswap-core/sdk-v1'

import {
  getBscScanLink,
  calculateSlippageAmount,
  isAddress,
  shortenAddress,
  calculateGasMargin,
  basisPointsToPercent,
} from '.'

describe('utils', () => {
  describe('#getBscScanLink', () => {
    it('correct for tx', () => {
      expect(getBscScanLink(1, 'abc', 'transaction')).toEqual('https://bscscan.com/tx/abc')
    })
    it('correct for token', () => {
      expect(getBscScanLink(1, 'abc', 'token')).toEqual('https://bscscan.com/token/abc')
    })
    it('correct for address', () => {
      expect(getBscScanLink(1, 'abc', 'address')).toEqual('https://bscscan.com/address/abc')
    })
    it('unrecognized chain id defaults to mainnet', () => {
      expect(getBscScanLink(2, 'abc', 'address')).toEqual('https://bscscan.com/address/abc')
    })
    it('ropsten', () => {
      expect(getBscScanLink(3, 'abc', 'address')).toEqual('https://bscscan.com/address/abc')
    })
    it('enum', () => {
      expect(getBscScanLink(ChainId.MAINNET, 'abc', 'address')).toEqual('https://bscscan.com/address/abc')
    })
  })

  describe('#calculateSlippageAmount', () => {
    it('bounds are correct', () => {
      const tokenAmount = new TokenAmount(new Token(ChainId.MAINNET, AddressZero, 0), '100')
      expect(() => calculateSlippageAmount(tokenAmount, -1)).toThrow()
      expect(calculateSlippageAmount(tokenAmount, 0).map((bound) => bound.toString())).toEqual(['100', '100'])
      expect(calculateSlippageAmount(tokenAmount, 100).map((bound) => bound.toString())).toEqual(['99', '101'])
      expect(calculateSlippageAmount(tokenAmount, 200).map((bound) => bound.toString())).toEqual(['98', '102'])
      expect(calculateSlippageAmount(tokenAmount, 10000).map((bound) => bound.toString())).toEqual(['0', '200'])
      expect(() => calculateSlippageAmount(tokenAmount, 10001)).toThrow()
    })
  })

  describe('#isAddress', () => {
    it('returns false if not', () => {
      expect(isAddress('')).toBe(false)
      expect(isAddress('0x0000')).toBe(false)
      expect(isAddress(1)).toBe(false)
      expect(isAddress({})).toBe(false)
      expect(isAddress(undefined)).toBe(false)
    })

    it('returns the checksummed address', () => {
      expect(isAddress('0xd0eefc60c31945be5bebc4be2eed524a745e949b')).toBe('0xD0eEFC60c31945bE5beBC4BE2EeD524a745e949B')
      expect(isAddress('0xd0eefc60c31945be5bebc4be2eed524a745e949b')).toBe('0xD0eEFC60c31945bE5beBC4BE2EeD524a745e949B')
    })

    it('succeeds even without prefix', () => {
      expect(isAddress('d0eefc60c31945be5bebc4be2eed524a745e949b')).toBe('D0eEFC60c31945bE5beBC4BE2EeD524a745e949B')
    })
    it('fails if too long', () => {
      expect(isAddress('d0eefc60c31945be5bebc4be2eed524a745e949b0')).toBe(false)
    })
  })

  describe('#shortenAddress', () => {
    it('throws on invalid address', () => {
      expect(() => shortenAddress('abc')).toThrow("Invalid 'address'")
    })

    it('truncates middle characters', () => {
      expect(shortenAddress('0xd0eefc60c31945be5bebc4be2eed524a745e949b')).toBe('0xd0ee...946b')
    })

    it('truncates middle characters even without prefix', () => {
      expect(shortenAddress('d0eefc60c31945be5bebc4be2eed524a745e949b0')).toBe('0xd0ee...946b')
    })

    it('renders checksummed address', () => {
      expect(shortenAddress('0x2E1b342132A67Ea578e4E3B814bae2107dc254CC'.toLowerCase())).toBe('0x2E1b...54CC')
    })
  })

  describe('#calculateGasMargin', () => {
    it('adds 10%', () => {
      expect(calculateGasMargin(BigNumber.from(1000)).toString()).toEqual('1100')
      expect(calculateGasMargin(BigNumber.from(50)).toString()).toEqual('55')
    })
  })

  describe('#basisPointsToPercent', () => {
    it('converts basis points numbers to percents', () => {
      expect(basisPointsToPercent(100).equalTo(new Percent(JSBI.BigInt(1), JSBI.BigInt(100)))).toBeTruthy()
      expect(basisPointsToPercent(500).equalTo(new Percent(JSBI.BigInt(5), JSBI.BigInt(100)))).toBeTruthy()
      expect(basisPointsToPercent(50).equalTo(new Percent(JSBI.BigInt(5), JSBI.BigInt(1000)))).toBeTruthy()
      expect(
        basisPointsToPercent(110.00000000000001).equalTo(new Percent(JSBI.BigInt(110), JSBI.BigInt(10000)))
      ).toBeTruthy()
    })
  })
})
