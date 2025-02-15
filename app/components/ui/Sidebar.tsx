'use client'

import * as React from 'react'
import Link from 'next/link'
import { 
  Home, 
  ArrowLeftRight, 
  DollarSign, 
  ClipboardCheck, 
  FileText, 
  UserCheck, 
  MessageCircle, 
  Stamp, 
  BarChart2, 
  Landmark, 
  Shield, 
  LogOut, 
  Wallet
} from 'lucide-react'
import WalletUserBase from '../WallerUser'

const menuItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Wallet, label: 'Invest', path: '/bank' },
  { icon: ArrowLeftRight, label: 'Transaction', path: '/transaction' },
  { icon: ArrowLeftRight, label: 'Swap', path: '/swap' },
  { icon: DollarSign, label: 'Fund', path: '/fund' },
  { icon: ClipboardCheck, label: 'Eligibility Check', path: '/eligibility' },
  { icon: FileText, label: 'Submit Applications', path: '/applications' },
  { icon: UserCheck, label: 'KYC', path: '/kyc' },
  { icon: MessageCircle, label: 'Chat', path: '/chat' },
  { icon: Stamp, label: 'NFT Stamps', path: '/nft-stamps' },
  { icon: BarChart2, label: 'Portfolio', path: '/portfolio' },
  { icon: Landmark, label: 'Fixed Deposit', path: '/fixed-deposit' },
  { icon: Shield, label: 'Privacy Policy', path: '/privacy-policy' },
]

export default function EnhancedSidebar() {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  return (
    <div className="bg-slate-200 text-black w-64 h-screen left-0 top-0 flex flex-col shadow-lg border-r-2 border-slate-500 absolute z-50">
      <div className="p-4 flex justify-center items-center">
        <div className="h-16 w-16 bg-gray-800 rounded-lg" />
        <WalletUserBase/>
      </div>
      <div className="flex-1 px-4 overflow-y-auto">
        <nav>
          {menuItems.map(({ icon: Icon, label, path }) => (
            <Link href={path} key={label} legacyBehavior>
              <a
                className={`w-full flex items-center gap-3 py-2 px-3 rounded-lg transition-colors font-medium ${
                  activeItem === label ? 'bg-black text-white' : 'hover:bg-gray-100 text-black'
                }`}
                onClick={() => setActiveItem(label)}
              >
                {Icon && <Icon className="h-5 w-5" />}
                <span>{label}</span>
              </a>
            </Link>
          ))}
        </nav>
      </div>
      <div className="p-4">
        <button className="w-full flex items-center gap-3 py-4 px-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
          <LogOut className="h-5 w-5" />
          <span>Disconnect</span>
        </button>
      </div>
    </div>
  )
}
