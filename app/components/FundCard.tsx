'use client';
import { FundCard } from '@coinbase/onchainkit/fund';

export default function FundCardEth() {
  const presetAmountInputs = ['10', '20', '50'] as const;
  return (
    <>
    <FundCard
     assetSymbol='ETH'
     country='US'
     currency='USD'
     presetAmountInputs={presetAmountInputs}
    />
    </>
  );
}
