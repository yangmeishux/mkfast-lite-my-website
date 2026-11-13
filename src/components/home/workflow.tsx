import { IconArrowRight } from '@tabler/icons-react';
import { Container } from '@/components/layout/container';
import { ButtonLink } from '@/components/ui/button-link';
import { Section } from '@/components/ui/section';
import { Tag } from '@/components/ui/tag';
import { practiceHref, workflow } from '@/content/practice';
import { type AppLocale, message } from '@/lib/locale';
import { cn } from '@/lib/utils';

export function Workflow({ locale }: { locale: AppLocale }) {
  const copy = workflow[locale];

  return (
    <Section id="workflow">
      <Container>
        <div className="max-w-3xl">
          <Tag>{message('workflow_kicker', locale)}</Tag>
          <h2 className="mt-6 text-balance text-4xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl">
            {message('workflow_title', locale)}
          </h2>
          <p className="mt-6 max-w-[65ch] text-lg leading-8 text-muted-foreground">
            {message('workflow_description', locale)}
          </p>
          <p className="mt-4 max-w-[65ch] text-lg leading-8">{copy.summary}</p>
        </div>
        <ol className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {workflow.stages.map((stage, index) => (
            <li
              key={stage.en}
              className="rounded-[12px] border-2 border-ink bg-yellow p-4 text-ink shadow-brutal-xs"
            >
              <span className="font-black text-ink/45">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="mt-3 block text-xl font-black">
                {stage[locale]}
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {workflow.modes.map((mode) => (
            <article
              key={mode.id}
              className={cn(
                'rounded-[14px] border-2 border-ink p-6 text-ink shadow-brutal',
                mode.tone,
                mode.id === 'full' && 'lg:col-span-2'
              )}
            >
              <h3 className="text-3xl font-black">{mode[locale].title}</h3>
              <p className="mt-3 max-w-[68ch] leading-7 text-ink/80">
                {mode[locale].summary}
              </p>
            </article>
          ))}
        </div>
        <ButtonLink
          className="mt-8"
          href={practiceHref(locale, `/workflows/${workflow.slug}`)}
        >
          {message('workflow_action', locale)}
          <IconArrowRight aria-hidden="true" className="size-5" />
        </ButtonLink>
      </Container>
    </Section>
  );
}
