import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex size-11 shrink-0 items-center justify-center rounded-lg border-2 border-ink bg-orange text-2xl font-black leading-none text-ink shadow-brutal-xs',
        className
      )}
    >
      9
    </span>
  );
}
