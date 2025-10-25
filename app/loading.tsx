export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <div className="text-center">
        <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent"></div>
        <p className="text-text-secondary">Loading...</p>
      </div>
    </div>
  )
}
