import { ethers } from 'ethers';

export const BTBM_ADDRESS = '0x335B6Eb6E42d146fb28F7b0b618CeF44276D02d6';
export const MINT_PRICE_ETHER = ethers.utils.parseEther('.001');
export const MINUTE_MS = 5000;
export const WL_SALE_DATE = {
  START: new Date(Date.UTC(2022, 6 + 1, 8, 14, 0, 0)),
  END: new Date(Date.UTC(2022, 6 + 1, 8, 20, 0, 0)),
};