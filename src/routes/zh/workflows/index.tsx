import { createFileRoute } from '@tanstack/react-router';
import { WorkflowCatalog } from '@/components/practice/workflow-views';
import { message } from '@/lib/locale';
import { getRequestOrigin } from '@/lib/request-origin';
import { contentHead } from '@/lib/seo';

export const Route = createFileRoute('/zh/workflows/')({
  head: () =>
    contentHead(
      'zh',
      '/zh/workflows',
      message('workflows_meta_title', 'zh'),
      message('workflow_description', 'zh'),
      getRequestOrigin()
    ),
  component: () => <WorkflowCatalog locale="zh" />,
});
