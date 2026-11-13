import { createFileRoute } from '@tanstack/react-router';
import { contentPaths } from '@/content/practice';
import { siteOrigin } from '@/lib/seo';

function alternateLinks(origin: string, path: string) {
  const englishPath = path.replace(/^\/zh(?=\/|$)/, '') || '/';
  const chinesePath = englishPath === '/' ? '/zh' : `/zh${englishPath}`;
  return `<xhtml:link rel="alternate" hreflang="en" href="${origin}${englishPath}"/><xhtml:link rel="alternate" hreflang="zh-CN" href="${origin}${chinesePath}"/>`;
}

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = siteOrigin(new URL(request.url).origin);
        const paths = ['/', '/zh', ...contentPaths()];
        const urls = paths
          .map(
            (path) =>
              `  <url><loc>${origin}${path}</loc>${alternateLinks(origin, path)}</url>`
          )
          .join('\n');
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { 'content-type': 'application/xml; charset=utf-8' },
        });
      },
    },
  },
});
