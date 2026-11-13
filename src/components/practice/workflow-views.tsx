import { Container } from '@/components/layout/container';
import { PromptBlock } from '@/components/practice/prompt-block';
import {
  practiceLink,
  practicePlate,
  practiceSheet,
} from '@/components/practice/styles';
import { Tag } from '@/components/ui/tag';
import { practiceHref, workflow } from '@/content/practice';
import { type AppLocale, localizedPath, message } from '@/lib/locale';
import { cn } from '@/lib/utils';

export function WorkflowCatalog({ locale }: { locale: AppLocale }) {
  const copy = workflow[locale];
  return (
    <main id="main-content">
      <section className="border-b border-ink/15 py-16 sm:py-24">
        <Container>
          <a
            href={localizedPath(locale, '#workflow')}
            className="font-black no-underline hover:underline"
          >
            {message('workflow_kicker', locale)}
          </a>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            {message('workflow_page_title', locale)}
          </h1>
          <p className="mt-6 max-w-[66ch] text-lg leading-8 text-muted-foreground">
            {message('workflow_description', locale)}
          </p>
          <a
            href={practiceHref(locale, `/workflows/${workflow.slug}`)}
            className={cn(
              practiceSheet,
              practiceLink,
              'mt-10 block p-6 no-underline sm:p-8'
            )}
          >
            <Tag>{message('workflow_kicker', locale)}</Tag>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.03em]">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-[62ch] text-lg leading-8 text-ink/75">
              {copy.summary}
            </p>
          </a>
        </Container>
      </section>
    </main>
  );
}

export function WorkflowDetail({ locale }: { locale: AppLocale }) {
  const copy = workflow[locale];
  return (
    <main id="main-content">
      <section className="border-b border-ink/15 bg-yellow py-16 text-ink sm:py-24">
        <Container className="max-w-4xl">
          <a
            href={practiceHref(locale, '/workflows')}
            className="font-black text-ink no-underline hover:underline"
          >
            {message('practice_back_workflows', locale)}
          </a>
          <div className="mt-6">
            <Tag className="bg-paper">{message('workflow_kicker', locale)}</Tag>
          </div>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-[66ch] text-lg leading-8 text-ink/75">
            {copy.summary}
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container>
          <h2 className="text-3xl font-black">
            {message('practice_stages', locale)}
          </h2>
          <ol className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
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
          <h2 className="mt-14 text-3xl font-black">
            {message('practice_modes', locale)}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {workflow.modes.map((mode) => (
              <article
                key={mode.id}
                className={cn(
                  practicePlate,
                  mode.tone,
                  'min-w-0 p-6 sm:p-7',
                  mode.id === 'full' && 'lg:col-span-2'
                )}
              >
                <h3 className="text-3xl font-black">{mode[locale].title}</h3>
                <p className="mt-3 max-w-[62ch] leading-7 text-ink/80">
                  {mode[locale].summary}
                </p>
                <PromptBlock text={mode.how} />
              </article>
            ))}
          </div>
          <h2 className="mt-14 text-3xl font-black">
            {message('practice_plugins', locale)}
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {workflow.plugins.map((plugin) => (
              <li
                key={plugin}
                className="rounded-full border-2 border-ink bg-cyan px-4 py-2 font-black text-ink"
              >
                {plugin}
              </li>
            ))}
          </ul>
          <div className={cn(practiceSheet, 'mt-14 p-6 sm:p-8')}>
            <h2 className="text-3xl font-black">
              {message('practice_usage', locale)}
            </h2>
            <p className="mt-4 max-w-[68ch] text-lg leading-8 text-ink/75">
              {copy.intro}
            </p>
            <ul className="mt-6 grid gap-3">
              {copy.points.map((point) => (
                <li
                  key={point.name}
                  className="grid gap-1 rounded-[10px] border-2 border-ink px-4 py-3 md:grid-cols-[16rem_1fr] md:items-baseline md:gap-6"
                >
                  <span className="font-mono text-sm font-black">
                    {point.name}
                  </span>
                  <span className="leading-7 text-ink/75">{point.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}
