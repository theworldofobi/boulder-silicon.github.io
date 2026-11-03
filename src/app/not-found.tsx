import { Button } from "@/components/primitives/Button";

export default function NotFound() {
  return (
    <section className="bg-night flex min-h-[70svh] flex-col items-center justify-center px-6 text-center text-white">
      <p className="text-gold font-mono text-xs tracking-[0.14em] uppercase">
        Error 404 · DRC violation
      </p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
        This net is unrouted.
      </h1>
      <p className="mt-4 max-w-md text-white/65">
        The page you were looking for doesn&apos;t exist.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </div>
    </section>
  );
}
