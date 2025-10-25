import { EmojiLibrary } from './components/EmojiLibrary'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { QuickActions } from './components/QuickActions'

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />
      <Hero />
      <QuickActions />
      <EmojiLibrary />
    </main>
  )
}
