export const websiteConfig = {
  name: 'tootem9',
  legalName: '第九图腾网络',
  description:
    'The personal brand studio of 第九图腾网络: WeChat publishing, agent development, DeepSeek Hermes, web design, mini programs, and frontend work.',
  url: 'https://tootem9.cc',
  primaryActionHash: '#contact',
  defaultTheme: 'system' as const,
  themeStorageKey: 'tootem9-theme',
  colors: {
    background: '#fff8e8',
    theme: '#ffd84a',
  },
  manifest: {
    id: '/',
    startUrl: '/',
    scope: '/',
  },
  navigation: [
    { id: 'stack', labelKey: 'nav_stack' },
    { id: 'skills', labelKey: 'nav_skills' },
    { id: 'workflow', labelKey: 'nav_workflow' },
    { id: 'structure', labelKey: 'nav_structure' },
    { id: 'faq', labelKey: 'nav_faq' },
  ],
};
