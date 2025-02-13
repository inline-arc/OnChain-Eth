'use client';

import FundCardEth from "./components/FundCard";
import NFTCardEth from "./components/NFTCard";
import SwapCardEth from "./components/SwapCard";


export default function App() {
  const presetAmountInputs = ['10', '20', '50'] as const;
  return (
    <>
    <SwapCardEth />
    </>
  );
}
