import { createFileRoute, notFound } from '@tanstack/react-router';
import { SkillDetail } from '@/components/practice/skill-views';
import { websiteConfig } from '@/config/website';
import { getSkill } from '@/content/practice';
import { message } from '@/lib/locale';
import { getRequestOrigin } from '@/lib/request-origin';
import { contentHead } from '@/lib/seo';

export const Route = createFileRoute('/en/skills/$slug')({
  loader: ({ params }) => {
    const skill = getSkill(params.slug);
    if (!skill) {
      throw notFound();
    }
    return skill;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: message('not_found_meta_title', 'en') }],
      };
    }
    return contentHead(
      'en',
      `/en/skills/${loaderData.slug}`,
      `${loaderData.en.title} | ${websiteConfig.name}`,
      loaderData.en.summary,
      getRequestOrigin()
    );
  },
  component: SkillRoute,
});

function SkillRoute() {
  const skill = Route.useLoaderData();
  return <SkillDetail locale="en" skill={skill} />;
}
