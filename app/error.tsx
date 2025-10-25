'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-text-primary">
          Something went wrong!
        </h2>
        <p className="mb-6 text-text-secondary">{error.message}</p>
        <button
          onClick={reset}
          className="rounded-theme-md bg-accent px-6 py-3 text-white transition-colors hover:bg-accent/90"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
