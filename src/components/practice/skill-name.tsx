import type { skills } from '@/content/practice';
import type { AppLocale } from '@/lib/locale';
import { cn } from '@/lib/utils';

type SkillEntry = (typeof skills)[number];

export function SkillName({
  skill,
  locale,
  className,
  englishClassName,
}: {
  skill: SkillEntry;
  locale: AppLocale;
  className?: string;
  englishClassName?: string;
}) {
  return (
    <span className={cn('block', className)}>
      <span className="block">{skill[locale].title}</span>
      {locale === 'zh' ? (
        <span
          className={cn(
            'mt-1 block font-extrabold leading-snug tracking-[-0.02em] text-ink',
            englishClassName
          )}
          lang="en"
        >
          {skill.en.title}
        </span>
      ) : null}
    </span>
  );
}
