'use client'

import { EmojiCard } from './EmojiCard'

const sampleEmojis = [
  {
    id: '1',
    emoji: '🎯',
    name: 'Precision',
    description: 'Request highly specific and accurate responses',
    example: 'Give me a precise definition of quantum entanglement',
    votes: 245,
    category: 'Clarity',
  },
  {
    id: '2',
    emoji: '🌱',
    name: 'Growth',
    description: 'Ask for progressive or developmental insights',
    example: 'Explain how machine learning models evolve',
    votes: 189,
    category: 'Learning',
  },
  {
    id: '3',
    emoji: '🔧',
    name: 'Technical',
    description: 'Request detailed technical explanations',
    example: 'Explain the technical architecture of blockchain',
    votes: 312,
    category: 'Technical',
  },
  {
    id: '4',
    emoji: '💡',
    name: 'Insight',
    description: 'Seek creative or innovative perspectives',
    example: 'Give me innovative uses for AI in education',
    votes: 278,
    category: 'Creativity',
  },
  {
    id: '5',
    emoji: '👥',
    name: 'Collaborative',
    description: 'Request team-oriented or social perspectives',
    example: 'How can teams collaborate better remotely?',
    votes: 156,
    category: 'Social',
  },
  {
    id: '6',
    emoji: '📊',
    name: 'Analytical',
    description: 'Request data-driven or statistical analysis',
    example: 'Analyze the trends in cryptocurrency adoption',
    votes: 203,
    category: 'Analysis',
  },
]

export function EmojiLibrary() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-text-primary">
          Curated Emoji Library
        </h2>
        <div className="flex gap-2">
          <button className="rounded-theme-md border border-white/10 bg-surface px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
            All
          </button>
          <button className="rounded-theme-md border border-white/10 bg-surface px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
            Popular
          </button>
          <button className="rounded-theme-md border border-white/10 bg-surface px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent">
            Recent
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleEmojis.map((emoji) => (
          <EmojiCard key={emoji.id} emoji={emoji} />
        ))}
      </div>
    </section>
  )
}
