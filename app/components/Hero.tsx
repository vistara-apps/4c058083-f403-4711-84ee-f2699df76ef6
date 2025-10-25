'use client'

import { Search } from 'lucide-react'

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
          Discover AI Prompting Emojis
        </h1>
        <p className="mb-8 text-lg text-text-secondary">
          Enhance your AI interactions with specialized emojis
        </p>
        
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Search emojis by keyword..."
              className="w-full rounded-theme-lg border border-white/10 bg-surface px-12 py-4 text-text-primary placeholder-text-secondary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
