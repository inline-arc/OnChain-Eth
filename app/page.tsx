'use client';

import FundCardEth from "./components/FundCard";
import NFTCardEth from "./components/NFTCard";
import SwapCardEth from "./components/SwapCard";
import Sidebar from "./components/ui/Sidebar";


export default function App() {
  const presetAmountInputs = ['10', '20', '50'] as const;
  return (
    <>
    <Sidebar/>
    </>
  );
}
