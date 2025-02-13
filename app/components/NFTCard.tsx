"use client";

import { NFTCard } from '@coinbase/onchainkit/nft';
import {
    NFTLastSoldPrice, 
    NFTMedia, 
    NFTNetwork, 
    NFTOwner, 
    NFTTitle, 
  } from '@coinbase/onchainkit/nft/view'; 
   

export default function NFTCardEth() {
    return (
        <>
        <NFTCard
                contractAddress='0xb4703a3a73aec16e764cbd210b0fde9efdab8941'
                tokenId='1'>
                    <NFTMedia />
                    <NFTTitle />
                    <NFTOwner />
                    <NFTLastSoldPrice />
                    <NFTNetwork />
        </NFTCard>
        </>
    );
}