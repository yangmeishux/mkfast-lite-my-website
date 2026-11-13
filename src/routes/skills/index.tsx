import { createFileRoute } from '@tanstack/react-router';
import { SkillCatalog } from '@/components/practice/skill-views';
import { message } from '@/lib/locale';
import { getRequestOrigin } from '@/lib/request-origin';
import { contentHead } from '@/lib/seo';

export const Route = createFileRoute('/skills/')({
  head: () =>
    contentHead(
      'en',
      '/skills',
      message('skills_meta_title', 'en'),
      message('skills_description', 'en'),
      getRequestOrigin()
    ),
  component: () => <SkillCatalog locale="en" />,
});
