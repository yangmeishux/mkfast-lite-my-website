import { createFileRoute, notFound } from '@tanstack/react-router';
import { WorkflowDetail } from '@/components/practice/workflow-views';
import { websiteConfig } from '@/config/website';
import { workflow } from '@/content/practice';
import { getRequestOrigin } from '@/lib/request-origin';
import { contentHead } from '@/lib/seo';

export const Route = createFileRoute('/zh/workflows/$slug')({
  loader: ({ params }) => {
    if (params.slug !== workflow.slug) {
      throw notFound();
    }
    return workflow;
  },
  head: ({ loaderData }) => {
    const item = loaderData ?? workflow;
    return contentHead(
      'zh',
      `/zh/workflows/${item.slug}`,
      `${item.zh.title}｜${websiteConfig.legalName}`,
      item.zh.summary,
      getRequestOrigin()
    );
  },
  component: () => <WorkflowDetail locale="zh" />,
});
