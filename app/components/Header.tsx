'use client'

import { Sparkles } from 'lucide-react'
import { ConnectWalletButton } from './ConnectWalletButton'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-surface/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-text-primary">
            AI Emoji Hub
          </span>
        </div>
        <ConnectWalletButton />
      </div>
    </header>
  )
}
