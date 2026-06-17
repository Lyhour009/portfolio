import Link from "next/link";
import { ArrowLeft, CodeXml, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300/20 blur-3xl dark:bg-pink-500/10"
      />

      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-3xl border border-border bg-card text-primary shadow-[0_8px_24px_rgba(236,72,153,0.08)]">
          <CodeXml className="size-7" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
          This page could not
          <span className="pink-gradient block">be found.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
          The page may have been moved, deleted, or the address may be
          incorrect. Let&apos;s return to the portfolio.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="pink-button gap-2">
            <Home className="size-4" />
            Back to Home
          </Link>

          <Link href="/#projects" className="white-button gap-2">
            <ArrowLeft className="size-4" />
            View Projects
          </Link>
        </div>

        <div className="mt-12 rounded-3xl border border-border bg-card/70 p-5 text-left font-mono text-sm shadow-sm backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-border pb-4">
            <span className="size-3 rounded-full bg-red-400" />
            <span className="size-3 rounded-full bg-amber-400" />
            <span className="size-3 rounded-full bg-emerald-400" />
          </div>

          <div className="mt-4 space-y-1 leading-7">
            <p>
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">page</span>{" "}
              <span className="text-muted-foreground">=</span>{" "}
              <span className="text-primary">undefined</span>;
            </p>

            <p>
              <span className="text-primary">return</span>{" "}
              <span className="text-foreground">
                &quot;Let&apos;s go home&quot;
              </span>
              ;
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
