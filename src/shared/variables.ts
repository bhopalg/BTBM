import { ethers } from 'ethers';

const mainnetAddress = '0x114DD039F2575468dFe8312e22B58Aab9Af8482B';
const testnetAddress = '0x33d7942424C39644475ae3911e09db6a866fE8d9';

export const BTBM_ADDRESS = mainnetAddress;

export const MINT_PRICE_ETHER = ethers.utils.parseEther('.055');
export const MINUTE_MS = 5000;
export const WL_SALE_DATE = {
  START: new Date(Date.UTC(2022, 5 + 1, 8, 14, 0, 0)),
  END: new Date(Date.UTC(2022, 5 + 1, 8, 20, 0, 0)),
};
export const MAX_PUBLIC_QUANTITY = 10;