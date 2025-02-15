import { Avatar, Identity, Name, Badge, Address } from '@coinbase/onchainkit/identity';
import { base } from 'viem/chains'; 
 
export default function WalletUserBase() {
    return(
        <>
        <Identity
        className='bg-white p-4 rounded-lg shadow-lg'
        chain={base}
        address="0x838aD0EAE54F99F1926dA7C3b6bFbF617389B4D9"
        schemaId="0xf8b05c79f090979bf4a80270aba232dff11a10d9ca55c4f88de95317970f0de9"> 
        <Avatar /> 
        <Name> 
        <Badge /> 
        </Name> 
        <Address /> 
        </Identity> 
        </>
    );
}