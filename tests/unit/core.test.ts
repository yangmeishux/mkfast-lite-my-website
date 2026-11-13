import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { websiteConfig } from '@/config/website';
import { localeMeta, localizedPath, withLocale } from '@/lib/locale';
import { absoluteSiteUrl, homeHead, siteOrigin } from '@/lib/seo';
import { cn } from '@/lib/utils';

describe('tootem9 core contracts', () => {
  it('uses localized simple home paths', () => {
    expect(localizedPath('zh')).toBe('/');
    expect(localizedPath('en')).toBe('/en');
    expect(localizedPath('zh', '#stack')).toBe('/#stack');
    expect(localizedPath('en', '#stack')).toBe('/en#stack');
    expect(withLocale('/skills/grill-me', 'en')).toBe('/en/skills/grill-me');
    expect(withLocale('/en/skills/grill-me', 'zh')).toBe('/skills/grill-me');
    expect(withLocale('/en', 'zh')).toBe('/');
    expect(withLocale('/', 'en')).toBe('/en');
    expect(localeMeta.zh.hreflang).toBe('zh-CN');
  });

  it('identifies the public personal brand site', () => {
    expect(websiteConfig.name).toBe('tootem9');
    expect(websiteConfig.legalName).toBe('第九图腾网络');
    expect(websiteConfig.url).toBe('https://tootem9.cc');
    expect(websiteConfig.primaryActionHash).toBe('#contact');
    expect(websiteConfig.themeStorageKey).toBeTruthy();
    expect(websiteConfig.manifest.startUrl).toBe('/');
  });

  it('keeps public theme colors aligned with the CSS tokens', () => {
    const styles = readFileSync('src/styles.css', 'utf8');
    expect(styles).toContain(
      `--background: ${websiteConfig.colors.background};`
    );
    expect(styles).toContain(`--yellow: ${websiteConfig.colors.theme};`);
  });

  it('builds absolute metadata from the configured or request origin', () => {
    expect(siteOrigin('https://example.com/')).toBe('https://tootem9.cc');
    expect(absoluteSiteUrl('/en', 'https://example.com')).toBe(
      'https://tootem9.cc/en'
    );

    const head = homeHead('zh', 'https://example.com');
    expect(head.links[0]).toEqual({
      rel: 'canonical',
      href: 'https://tootem9.cc/',
    });
    expect(homeHead('en', 'https://example.com').links[0]).toEqual({
      rel: 'canonical',
      href: 'https://tootem9.cc/en',
    });
    expect(head.meta).toContainEqual({
      property: 'og:image',
      content: 'https://tootem9.cc/og.png',
    });
  });

  it('joins optional class names without false values', () => {
    expect(cn('base', false, null, 'active', undefined)).toBe('base active');
  });
});
