import { createFileRoute, notFound } from '@tanstack/react-router';
import { WorkflowDetail } from '@/components/practice/workflow-views';
import { websiteConfig } from '@/config/website';
import { workflow } from '@/content/practice';
import { getRequestOrigin } from '@/lib/request-origin';
import { contentHead } from '@/lib/seo';

export const Route = createFileRoute('/en/workflows/$slug')({
  loader: ({ params }) => {
    if (params.slug !== workflow.slug) {
      throw notFound();
    }
    return workflow;
  },
  head: ({ loaderData }) => {
    const item = loaderData ?? workflow;
    return contentHead(
      'en',
      `/en/workflows/${item.slug}`,
      `${item.en.title} | ${websiteConfig.name}`,
      item.en.summary,
      getRequestOrigin()
    );
  },
  component: () => <WorkflowDetail locale="en" />,
});
