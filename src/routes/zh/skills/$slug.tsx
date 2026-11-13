import { createFileRoute, notFound } from '@tanstack/react-router';
import { SkillDetail } from '@/components/practice/skill-views';
import { websiteConfig } from '@/config/website';
import { getSkill } from '@/content/practice';
import { message } from '@/lib/locale';
import { getRequestOrigin } from '@/lib/request-origin';
import { contentHead } from '@/lib/seo';

export const Route = createFileRoute('/zh/skills/$slug')({
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
        meta: [{ title: message('not_found_meta_title', 'zh') }],
      };
    }
    return contentHead(
      'zh',
      `/zh/skills/${loaderData.slug}`,
      `${loaderData.zh.title}｜${websiteConfig.legalName}`,
      loaderData.zh.summary,
      getRequestOrigin()
    );
  },
  component: SkillRoute,
});

function SkillRoute() {
  const skill = Route.useLoaderData();
  return <SkillDetail locale="zh" skill={skill} />;
}
