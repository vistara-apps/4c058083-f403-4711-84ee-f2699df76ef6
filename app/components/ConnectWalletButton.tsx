'use client'

import { Wallet } from 'lucide-react'

export function ConnectWalletButton() {
  return (
    <button className="flex items-center gap-2 rounded-theme-md bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent/90 active:scale-95">
      <Wallet className="h-4 w-4" />
      Connect Wallet
    </button>
  )
}
