'use client'

import { ThumbsUp, Copy, Share2 } from 'lucide-react'

interface EmojiCardProps {
  emoji: {
    id: string
    emoji: string
    name: string
    description: string
    example: string
    votes: number
    category: string
  }
}

export function EmojiCard({ emoji }: EmojiCardProps) {
  return (
    <div className="group rounded-theme-lg border border-white/10 bg-surface p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{emoji.emoji}</span>
          <div>
            <h3 className="font-semibold text-text-primary">{emoji.name}</h3>
            <span className="text-xs text-text-secondary">{emoji.category}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-theme-md bg-bg px-2 py-1">
          <ThumbsUp className="h-3 w-3 text-accent" />
          <span className="text-xs font-medium text-text-primary">
            {emoji.votes}
          </span>
        </div>
      </div>

      <p className="mb-3 text-sm text-text-secondary">{emoji.description}</p>

      <div className="mb-4 rounded-theme-md border border-white/5 bg-bg p-3">
        <p className="text-xs text-text-secondary">Example:</p>
        <p className="mt-1 text-sm text-text-primary">{emoji.example}</p>
      </div>

      <div className="flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-theme-md border border-white/10 bg-bg px-3 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
          <Copy className="h-4 w-4" />
          Copy
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-theme-md border border-white/10 bg-bg px-3 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>
    </div>
  )
}
