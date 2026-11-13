import { createFileRoute } from '@tanstack/react-router';
import { WorkflowCatalog } from '@/components/practice/workflow-views';
import { message } from '@/lib/locale';
import { getRequestOrigin } from '@/lib/request-origin';
import { contentHead } from '@/lib/seo';

export const Route = createFileRoute('/workflows/')({
  head: () =>
    contentHead(
      'en',
      '/workflows',
      message('workflows_meta_title', 'en'),
      message('workflow_description', 'en'),
      getRequestOrigin()
    ),
  component: () => <WorkflowCatalog locale="en" />,
});
