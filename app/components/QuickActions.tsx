'use client'

import { Plus, TrendingUp, Award, Share2 } from 'lucide-react'

const actions = [
  {
    icon: Plus,
    label: 'Propose Emoji',
    description: 'Submit new AI emoji',
    color: 'bg-accent',
  },
  {
    icon: TrendingUp,
    label: 'Leaderboard',
    description: 'Top contributors',
    color: 'bg-purple-600',
  },
  {
    icon: Award,
    label: 'My Badges',
    description: 'View achievements',
    color: 'bg-amber-600',
  },
  {
    icon: Share2,
    label: 'Share Recipe',
    description: 'Create prompt frame',
    color: 'bg-emerald-600',
  },
]

export function QuickActions() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {actions.map((action) => (
          <button
            key={action.label}
            className="group relative overflow-hidden rounded-theme-lg border border-white/10 bg-surface p-6 text-left transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 active:scale-95"
          >
            <div className={`mb-3 inline-flex rounded-theme-md ${action.color} p-2`}>
              <action.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mb-1 font-semibold text-text-primary">
              {action.label}
            </h3>
            <p className="text-sm text-text-secondary">{action.description}</p>
          </button>
        ))}
      </div>
    </section>
  )
}
