import * as m from '@/locale/paraglide/messages';

export type AppLocale = 'en' | 'zh';

export function message(key: keyof typeof m, locale: AppLocale): string {
  const value = m[key];
  if (typeof value !== 'function') {
    return key;
  }
  return value({}, { locale });
}

export function localePath(locale: AppLocale, path = '/') {
  const bare = path.replace(/^\/en(?=\/|$)/, '') || '/';
  if (locale === 'en') {
    return bare === '/' ? '/en' : `/en${bare}`;
  }
  return bare;
}

export function localizedPath(locale: AppLocale, hash = '') {
  return `${localePath(locale)}${hash}`;
}

export function withLocale(pathname: string, locale: AppLocale) {
  return localePath(locale, pathname);
}

export const localeMeta = {
  en: { hreflang: 'en', label: 'EN', messageKey: 'language_english' },
  zh: { hreflang: 'zh-CN', label: '中', messageKey: 'language_chinese' },
} as const;
