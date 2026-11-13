import { IconArrowRight } from '@tabler/icons-react';
import { Container } from '@/components/layout/container';
import { SkillName } from '@/components/practice/skill-name';
import { practiceLink } from '@/components/practice/styles';
import { ButtonLink } from '@/components/ui/button-link';
import { Section } from '@/components/ui/section';
import { Tag } from '@/components/ui/tag';
import {
  featuredSkills,
  groupLabel,
  groupTone,
  practiceHref,
  skillGroups,
} from '@/content/practice';
import { type AppLocale, message } from '@/lib/locale';
import { cn } from '@/lib/utils';

export function Skills({ locale }: { locale: AppLocale }) {
  const featured = featuredSkills();

  return (
    <Section id="skills" className="bg-lavender text-ink">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <Tag className="bg-paper">{message('skills_kicker', locale)}</Tag>
            <h2 className="mt-6 text-balance text-4xl font-black leading-[1.1] tracking-[-0.03em] sm:text-5xl">
              {message('skills_title', locale)}
            </h2>
            <p className="mt-6 max-w-[62ch] text-lg leading-8 text-ink/75">
              {message('skills_description', locale)}
            </p>
            <ButtonLink
              variant="plain"
              className="mt-8 bg-paper text-ink hover:bg-yellow dark:bg-paper dark:text-ink dark:hover:bg-yellow"
              href={practiceHref(locale, '/skills')}
            >
              {message('skills_action', locale)}
              <IconArrowRight aria-hidden="true" className="size-5" />
            </ButtonLink>
          </div>
          <div className="grid gap-3">
            {featured.map((skill, index) => (
              <a
                key={skill.slug}
                href={practiceHref(locale, `/skills/${skill.slug}`)}
                className={cn(
                  practiceLink,
                  'block border-2 border-ink bg-paper p-5 text-ink no-underline shadow-[4px_4px_0_0_var(--ink)] transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--ink)]',
                  index === 0 && 'bg-yellow'
                )}
              >
                <span
                  className={cn(
                    'inline-flex rounded-full border-2 border-ink px-3 py-1 text-xs font-black',
                    groupTone[skill.group]
                  )}
                >
                  {groupLabel(skill.group, locale)}
                </span>
                <SkillName
                  skill={skill}
                  locale={locale}
                  className="mt-3 text-2xl font-black"
                  englishClassName="text-sm"
                />
                <span className="mt-2 block max-w-[58ch] leading-7 text-ink/75">
                  {skill[locale].summary}
                </span>
              </a>
            ))}
          </div>
        </div>
        <nav
          aria-label={message('practice_groups', locale)}
          className="mt-10 flex flex-wrap gap-2"
        >
          {skillGroups.map((group) => (
            <a
              key={group.id}
              href={practiceHref(locale, `/skills#${group.id}`)}
              className={cn(
                practiceLink,
                'border-2 border-ink bg-paper px-3 py-2 text-sm font-black text-ink no-underline hover:bg-yellow'
              )}
            >
              {group[locale]}
            </a>
          ))}
        </nav>
      </Container>
    </Section>
  );
}
