import { Container } from '@/components/layout/container';
import { PromptBlock } from '@/components/practice/prompt-block';
import { SkillName } from '@/components/practice/skill-name';
import {
  practiceLink,
  practicePlate,
  practiceSheet,
} from '@/components/practice/styles';
import { Section } from '@/components/ui/section';
import { Tag } from '@/components/ui/tag';
import {
  getSkill,
  groupLabel,
  groupTone,
  practiceHref,
  skillGroups,
  type skills,
  skillsInGroup,
} from '@/content/practice';
import { type AppLocale, localizedPath, message } from '@/lib/locale';
import { cn } from '@/lib/utils';

type SkillEntry = (typeof skills)[number];

export function SkillCatalog({ locale }: { locale: AppLocale }) {
  return (
    <main id="main-content">
      <section className="border-b border-ink/15 bg-lavender py-16 text-ink sm:py-24">
        <Container>
          <a
            href={localizedPath(locale, '#skills')}
            className="font-black text-ink no-underline hover:underline"
          >
            {message('skills_kicker', locale)}
          </a>
          <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            {message('skills_page_title', locale)}
          </h1>
          <p className="mt-6 max-w-[66ch] text-lg leading-8 text-ink/75">
            {message('skills_description', locale)}
          </p>
          <nav
            aria-label={message('practice_groups', locale)}
            className="mt-8 flex flex-wrap gap-2"
          >
            {skillGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className={cn(
                  practiceLink,
                  'border-2 border-ink bg-paper px-3 py-2 text-sm font-black text-ink no-underline shadow-brutal-xs hover:bg-yellow'
                )}
              >
                {group[locale]}
              </a>
            ))}
          </nav>
        </Container>
      </section>
      {skillGroups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          className={index % 2 === 0 ? 'bg-background' : 'bg-surface'}
        >
          <Container>
            <article className={practiceSheet}>
              <h2
                className={cn(
                  'border-b-2 border-ink px-6 py-5 text-3xl font-black dark:border-paper',
                  groupTone[group.id]
                )}
              >
                {group[locale]}
              </h2>
              <div className="divide-y-2 divide-ink dark:divide-paper">
                {skillsInGroup(group.id).map((skill) => (
                  <a
                    key={skill.slug}
                    href={practiceHref(locale, `/skills/${skill.slug}`)}
                    className={cn(
                      practiceLink,
                      'grid gap-2 px-6 py-5 no-underline hover:bg-yellow md:grid-cols-[minmax(16rem,22rem)_1fr] md:items-start md:gap-8'
                    )}
                  >
                    <SkillName
                      skill={skill}
                      locale={locale}
                      className="text-2xl font-black"
                      englishClassName="text-sm"
                    />
                    <span className="leading-7 text-ink/75">
                      {skill[locale].summary}
                    </span>
                  </a>
                ))}
              </div>
            </article>
          </Container>
        </Section>
      ))}
    </main>
  );
}

export function SkillDetail({
  locale,
  skill,
}: {
  locale: AppLocale;
  skill: SkillEntry;
}) {
  const copy = skill[locale];
  const related = skill.related.flatMap((slug) => {
    const item = getSkill(slug);
    return item ? [item] : [];
  });

  return (
    <main id="main-content">
      <section className="border-b border-ink/15 bg-lavender py-16 text-ink sm:py-24">
        <Container className="max-w-4xl">
          <a
            href={practiceHref(locale, '/skills')}
            className="font-black text-ink no-underline hover:underline"
          >
            {message('practice_back_skills', locale)}
          </a>
          <div className="mt-6">
            <Tag className={groupTone[skill.group]}>
              {groupLabel(skill.group, locale)}
            </Tag>
          </div>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl">
            <SkillName
              skill={skill}
              locale={locale}
              englishClassName="text-xl sm:text-2xl"
            />
          </h1>
          <p className="mt-6 max-w-[66ch] text-lg leading-8 text-ink/75">
            {copy.summary}
          </p>
          <p className="mt-6 font-black">{skill.plugin}</p>
        </Container>
      </section>
      <section className="py-16 sm:py-24">
        <Container className="grid max-w-4xl gap-4 lg:grid-cols-2">
          <article className={cn(practicePlate, 'min-w-0 bg-green p-6 sm:p-7')}>
            <h2 className="text-2xl font-black">
              {message('practice_when', locale)}
            </h2>
            <p className="mt-4 leading-7 text-ink/80">{copy.when}</p>
          </article>
          <article
            className={cn(practicePlate, 'min-w-0 bg-yellow p-6 sm:p-7')}
          >
            <h2 className="text-2xl font-black">
              {message('practice_how', locale)}
            </h2>
            <PromptBlock text={skill.how} />
          </article>
        </Container>
        <Container className="mt-12 max-w-4xl">
          <h2 className="text-3xl font-black">
            {message('practice_usage', locale)}
          </h2>
          <p className="mt-5 max-w-[68ch] text-lg leading-8 text-muted-foreground">
            {copy.body}
          </p>
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-black">
                {message('practice_related', locale)}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {related.map((item) => (
                  <a
                    key={item.slug}
                    href={practiceHref(locale, `/skills/${item.slug}`)}
                    className={cn(
                      practiceLink,
                      'border-2 border-ink bg-yellow px-4 py-2 font-black text-ink no-underline shadow-brutal-xs hover:bg-yellow-soft'
                    )}
                  >
                    <SkillName
                      skill={item}
                      locale={locale}
                      englishClassName="text-xs font-bold"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
