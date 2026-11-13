import type { AppLocale } from '@/lib/locale';
import { Architecture } from './architecture';
import { Closing } from './closing';
import { Faq } from './faq';
import { Hero } from './hero';
import { Skills } from './skills';
import { Stack } from './stack';
import { Template } from './template';
import { Workflow } from './workflow';

export function HomePage({ locale }: { locale: AppLocale }) {
  return (
    <main id="main-content">
      <Hero locale={locale} />
      <Stack locale={locale} />
      <Skills locale={locale} />
      <Workflow locale={locale} />
      <Architecture locale={locale} />
      <Template locale={locale} />
      <Faq locale={locale} />
      <Closing locale={locale} />
    </main>
  );
}
