export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex flex-col items-center">
        <div className="relative flex size-20 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/15" />

          <div className="absolute inset-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm" />

          <div className="size-10 animate-spin rounded-full border-[3px] border-primary/20 border-t-primary" />
        </div>

        <h2 className="mt-6 text-lg font-bold tracking-tight">
          Loading projects
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Preparing the best work for you...
        </p>

        <div className="mt-5 flex items-center gap-2">
          <span className="size-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <span className="size-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <span className="size-2 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
