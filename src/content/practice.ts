import type { AppLocale } from '@/lib/locale';

export const skillGroups = [
  { id: 'orchestration', zh: '编排', en: 'Orchestration' },
  { id: 'contract', zh: '契约与实现', en: 'Contract and build' },
  { id: 'verification', zh: '验证与验收', en: 'Verification and acceptance' },
  { id: 'visual', zh: '视觉一致性', en: 'Visual consistency' },
  { id: 'context', zh: '上下文与规范', en: 'Context and rules' },
  { id: 'migration', zh: '迁移与集成', en: 'Migration and integration' },
  { id: 'content', zh: '内容质量', en: 'Content quality' },
  { id: 'prompt', zh: '提示词与闭环', en: 'Prompts and loops' },
] as const;

export type SkillGroupId = (typeof skillGroups)[number]['id'];

export const groupTone: Record<SkillGroupId, string> = {
  orchestration: 'bg-cyan',
  contract: 'bg-yellow',
  verification: 'bg-green',
  visual: 'bg-lavender',
  context: 'bg-orange',
  migration: 'bg-yellow-soft',
  content: 'bg-cyan',
  prompt: 'bg-lavender',
};

type Copy = {
  title: string;
  summary: string;
  when: string;
  body: string;
};

export type Skill = {
  slug: string;
  group: SkillGroupId;
  plugin: 'frontend-team-toolkit';
  related: readonly string[];
  how: string;
  zh: Copy;
  en: Copy;
};

const toolkit = 'frontend-team-toolkit' as const;

export const skills = [
  {
    slug: 'ai-coding-tri-kit',
    group: 'orchestration',
    plugin: toolkit,
    related: ['pm-md-to-openspec-pipeline', 'openspec-contract-authoring'],
    how: '请按三件套走一遍这个需求：先对齐规格，再实现，再检查。\n@<需求文档>',
    zh: {
      title: '三件套工程化',
      summary: '按规格、流程和技能的固定顺序，把一次需求从说明走到可归档。',
      when: '你希望先写清规格再写代码，并且不想跳过规格或测试。',
      body: '这个技能规定顺序：先把规格说清楚，再走实现，再用技能守住质量。适合一整段功能。在 Cursor 里说明要按三件套走，或点名 ai-coding-tri-kit。',
    },
    en: {
      title: 'Spec, process, skills',
      summary:
        'Walk a request from the brief to something you can archive, in a fixed order: spec, process, then skills.',
      when: 'You want the spec written before the code, and you do not want the spec or the checks skipped.',
      body: 'This skill fixes the order: make the spec clear, then implement, then use skills to hold the quality. It fits a whole feature. In Cursor, say you want the three-piece pass, or name ai-coding-tri-kit.',
    },
  },
  {
    slug: 'pm-md-to-openspec-pipeline',
    group: 'orchestration',
    plugin: toolkit,
    related: ['change-spec-workflow', 'openspec-contract-authoring'],
    how: '请把这份需求文档转成 OpenSpec 契约。缺的材料只列清单。\n@<需求文档>',
    zh: {
      title: '需求文档转契约',
      summary: '把产品需求文档收成变更说明，再收成可以验收的契约文件。',
      when: '你手头是一份需求文档，想要的是契约，而不是直接改代码。',
      body: '它先切片并对照现有代码，再进入契约。材料不够时只列出缺口。点名 pm-md-to-openspec-pipeline，并附上需求文档。',
    },
    en: {
      title: 'Requirements into a contract',
      summary:
        'Turn a product requirements document into change notes, then into a contract you can accept against.',
      when: 'You have a requirements document and want a contract, not a direct code change.',
      body: 'It slices the document and checks it against the current code before writing the contract. If material is missing, it only lists the gaps. Name pm-md-to-openspec-pipeline and attach the requirements document.',
    },
  },
  {
    slug: 'change-spec-workflow',
    group: 'orchestration',
    plugin: toolkit,
    related: ['pm-md-to-openspec-pipeline'],
    how: '请按变更说明的三阶段处理这份需求：切片、对照现有代码、写出变更说明。\n@<需求文档>',
    zh: {
      title: '变更说明',
      summary: '先切片，再看现有代码，最后写出这次改动的变更说明。',
      when: '需求还是一整篇，你要先分成可做的变更。',
      body: '三阶段按顺序走完，才算一份变更说明。点名 change-spec-workflow。',
    },
    en: {
      title: 'Change notes',
      summary:
        'Slice the request, look at the current code, then write the change notes for this pass.',
      when: 'The request is still one long document, and you need it split into changes you can make.',
      body: 'A change note counts only after the three stages run in order. Name change-spec-workflow.',
    },
  },
  {
    slug: 'openspec-contract-authoring',
    group: 'contract',
    plugin: toolkit,
    related: ['incremental-implementation', 'pm-md-to-openspec-pipeline'],
    how: '请把这次改动写成 OpenSpec 契约，包含字段、设计、任务和还没定的问题。\n@<需求文档>',
    zh: {
      title: 'OpenSpec 契约',
      summary: '把字段、设计和任务写成可以核对的契约。',
      when: '你已经知道要改什么，需要一份实现前能核对的契约。',
      body: '契约里要能核对字段和未定问题。只有你明确说按这份契约写代码时，才进入实现。点名 openspec-contract-authoring。',
    },
    en: {
      title: 'OpenSpec contract',
      summary:
        'Write the fields, the design, and the tasks as a contract you can check.',
      when: 'You already know what will change, and you need a contract to check before implementation.',
      body: 'The contract has to make the fields and the open questions checkable. Implementation starts only when you explicitly say to code from this contract. Name openspec-contract-authoring.',
    },
  },
  {
    slug: 'incremental-implementation',
    group: 'contract',
    plugin: toolkit,
    related: ['openspec-contract-authoring'],
    how: '请在现有代码上增量实现。\n@<契约或需求>\n@<业务仓库>',
    zh: {
      title: '增量实现',
      summary: '在现有代码上改，锚定已经存在的页面和接口。',
      when: '业务仓库已经有代码，这次只加一块或改一块。',
      body: '改动落在现有仓库里。点名 incremental-implementation，并给出业务仓库。',
    },
    en: {
      title: 'Incremental implementation',
      summary:
        'Change the existing code, anchored to pages and interfaces that are already there.',
      when: 'The product repository already has code, and this pass only adds or changes one piece.',
      body: 'The change lands in the existing repository. Name incremental-implementation and point at the product repository.',
    },
  },
  {
    slug: 'skeleton-freeze',
    group: 'contract',
    plugin: toolkit,
    related: ['incremental-implementation'],
    how: '请先冻结这一块的骨架：模块、类型和函数签名。我确认前不要写函数体。\n@<要改的文件>',
    zh: {
      title: '冻结骨架',
      summary: '你点名之后，先写下模块、类型和函数签名，等人确认再写函数体。',
      when: '你想先看结构对不对，再允许填写实现。',
      body: '没有你的点名，不要进入这个技能。确认签名之前，停在骨架。点名 skeleton-freeze。',
    },
    en: {
      title: 'Freeze the skeleton',
      summary:
        'After you name it, write the modules, types, and function signatures, and wait for confirmation before writing function bodies.',
      when: 'You want to see whether the structure is right before implementation is allowed.',
      body: 'Do not enter this skill unless you name it. Stop at the skeleton until the signatures are confirmed. Name skeleton-freeze.',
    },
  },
  {
    slug: 'code-verify',
    group: 'verification',
    plugin: toolkit,
    related: ['deliverable-acceptance-audit'],
    how: '请对这次改动做技术验证，按维度给出通过或未过。\n@<业务仓库>',
    zh: {
      title: '技术验证',
      summary: '从七个维度检查实现有没有偏掉。',
      when: '代码已经写下，你要的是技术上过不过。',
      body: '验证看的是实现是否站得住，例如类型、边界和该做的核对。点名 code-verify。它也是主工作流里技术验证那一段所用的技能。',
    },
    en: {
      title: 'Technical verification',
      summary:
        'Check the implementation across seven dimensions and see whether it drifted.',
      when: 'The code is written, and what you want is a technical pass or fail.',
      body: 'Verification asks whether the implementation holds: types, boundaries, and the checks that should have been done. Name code-verify. The main workflow uses this skill for its technical verification stage.',
    },
  },
  {
    slug: 'deliverable-acceptance-audit',
    group: 'verification',
    plugin: toolkit,
    related: ['code-verify', 'loop-engineering'],
    how: '请按交付验收来审这次结果，条款和证据对不上就标出来。\n@<需求或验收文档>\n@<业务仓库>',
    zh: {
      title: '交付验收',
      summary: '对照验收条款查证据，找出没做完却声称完成的地方。',
      when: '你要确认交付是否满足已经写明的条款。',
      body: '验收看条款和证据。和需求文档冲突、又没有你的确认时，不要自己裁定。点名 deliverable-acceptance-audit。',
    },
    en: {
      title: 'Delivery acceptance',
      summary:
        'Check evidence against the acceptance clauses, and find places claimed done that are not finished.',
      when: 'You want to confirm the delivery meets clauses that are already written.',
      body: 'Acceptance looks at clauses and evidence. If something conflicts with the requirements and you have not confirmed it, do not decide it alone. Name deliverable-acceptance-audit.',
    },
  },
  {
    slug: 'interaction-html-analyzer',
    group: 'verification',
    plugin: toolkit,
    related: ['project-design-language'],
    how: '请分析这份交互原型，列出状态和关键操作。\n@<原型.html>',
    zh: {
      title: '交互原型分析',
      summary: '打开可点击的 HTML 原型，记下状态和操作。',
      when: '需求附了 HTML 原型，文字里写不全交互。',
      body: '先把原型里的状态和操作记下来，后面的实现和验收按这份记录对照。点名 interaction-html-analyzer。',
    },
    en: {
      title: 'Interaction prototype analysis',
      summary:
        'Open a clickable HTML prototype and record its states and actions.',
      when: 'The request includes an HTML prototype, and the writing does not cover the interaction.',
      body: 'Record the states and actions in the prototype first. Later implementation and acceptance check against that record. Name interaction-html-analyzer.',
    },
  },
  {
    slug: 'project-design-language',
    group: 'visual',
    plugin: toolkit,
    related: ['project-component-patterns'],
    how: '请扫描这个仓库并写成 DESIGN.md。之后加页面时皮肤跟这份文档。\n@<业务仓库>',
    zh: {
      title: '项目设计语言',
      summary: '扫描颜色、字号和组件皮肤，写成仓库根目录的 DESIGN.md。',
      when: '你要在已有产品里加页面，并且新页面要沿用原来的皮肤。',
      body: '布局跟随原型，颜色、字号、间距和组件皮肤跟随 DESIGN.md。点名 project-design-language。',
    },
    en: {
      title: 'Project design language',
      summary:
        'Scan color, type size, and component skin, and write them to DESIGN.md at the repository root.',
      when: 'You are adding pages to an existing product, and the new pages should keep the current skin.',
      body: 'Layout follows the prototype. Color, type size, spacing, and component skin follow DESIGN.md. Name project-design-language.',
    },
  },
  {
    slug: 'project-component-patterns',
    group: 'visual',
    plugin: toolkit,
    related: ['project-design-language'],
    how: '请扫描这个仓库的组件习惯，写成 COMPONENT_PATTERNS.md。\n@<业务仓库>',
    zh: {
      title: '组件习惯',
      summary: '扫描现有组件和页面写法，写成 COMPONENT_PATTERNS.md。',
      when: '仓库里已经有一套组件，你要加页面时沿用它们。',
      body: '加页面时先读相关的组件族。视觉跟 DESIGN.md，结构跟这份组件习惯。点名 project-component-patterns。',
    },
    en: {
      title: 'Component habits',
      summary:
        'Scan the existing components and page patterns, and write them to COMPONENT_PATTERNS.md.',
      when: 'The repository already has a component set, and new pages should reuse it.',
      body: 'Before adding a page, read the related component family. Visuals follow DESIGN.md. Structure follows these component habits. Name project-component-patterns.',
    },
  },
  {
    slug: 'ssot-agents-md',
    group: 'context',
    plugin: toolkit,
    related: ['project-component-patterns'],
    how: '请把这个仓库给 Agent 的规范收成一份统一说明。\n@<业务仓库>',
    zh: {
      title: '项目规范文档',
      summary: '把 Agent 该遵守的项目约定收成一份说明。',
      when: '约定散落在对话和旧文档里，你希望每次都读同一份。',
      body: '收完之后，实现以这一份为准。点名 ssot-agents-md。',
    },
    en: {
      title: 'Project rules for agents',
      summary:
        'Collect the project rules an agent must follow into one document.',
      when: 'The rules are scattered across chats and old documents, and you want the same file read every time.',
      body: 'After it is collected, implementation follows that one document. Name ssot-agents-md.',
    },
  },
  {
    slug: 'vue2-to-vue3-migration',
    group: 'migration',
    plugin: toolkit,
    related: ['incremental-implementation'],
    how: '请先给出 Vue 2 迁到 Vue 3 的登记和易漏点，我确认后再改代码。\n@<业务仓库>',
    zh: {
      title: 'Vue 2 迁到 Vue 3',
      summary: '先登记依赖和易漏点，再把页面迁到 Vue 3，并保持行为不变。',
      when: '你要把现有 Vue 2 页面迁到 Vue 3。',
      body: '先登记，再迁移。行为保持不变。点名 vue2-to-vue3-migration。',
    },
    en: {
      title: 'Vue 2 to Vue 3',
      summary:
        'Register dependencies and easy-to-miss points first, then move the pages to Vue 3 without changing behavior.',
      when: 'You are moving existing Vue 2 pages to Vue 3.',
      body: 'Register first, then migrate. Behavior stays the same. Name vue2-to-vue3-migration.',
    },
  },
  {
    slug: 'yapi-frontend-integration',
    group: 'migration',
    plugin: toolkit,
    related: ['incremental-implementation'],
    how: '请按 YApi 上的接口说明对接，先核对方法和字段，再写请求。\n@<接口文档链接>',
    zh: {
      title: '按 YApi 接接口',
      summary: '先看 YApi 上的接口说明，再写前端请求。',
      when: '你要对接已经写在 YApi 上的接口。',
      body: '字段以接口文档为准。连接 YApi 所需的凭证由你在自己的 Cursor 里配置。点名 yapi-frontend-integration。',
    },
    en: {
      title: 'Integrate from YApi',
      summary:
        'Read the API notes on YApi first, then write the frontend requests.',
      when: 'You are connecting to an API that is already documented on YApi.',
      body: 'Fields follow the API document. You configure the YApi credentials in your own Cursor. Name yapi-frontend-integration.',
    },
  },
  {
    slug: 'nathan-article-voice',
    group: 'content',
    plugin: toolkit,
    related: ['wechat-article-review', 'article-value-forge'],
    how: '请按我的文风写这篇文章，保留我的论点。\n@<提纲或原稿>',
    zh: {
      title: '按 Nathan 的文风写稿',
      summary: '用 Nathan 的公众号和博客口吻写稿、改稿、扩写。',
      when: '你要写或改一篇给读者看的文章，并且希望读起来像 Nathan。',
      body: '论点以这一篇为准。它用于文章，不用于需求文档和技能说明。点名 nathan-article-voice。',
    },
    en: {
      title: "Write in Nathan's voice",
      summary:
        "Draft, revise, or expand in the voice of Nathan's WeChat account and blog.",
      when: 'You are writing or revising an article for readers, and you want it to sound like Nathan.',
      body: 'The argument follows this piece. Use it for articles, not for requirements documents or skill notes. Name nathan-article-voice.',
    },
  },
  {
    slug: 'wechat-article-review',
    group: 'content',
    plugin: toolkit,
    related: ['nathan-article-voice'],
    how: '请审这篇公众号文章，给出分数和要改的地方。\n@<文章>',
    zh: {
      title: '公众号审稿',
      summary: '按固定维度给一篇公众号文章打 0 到 10 分，并写出改稿意见。',
      when: '稿子已经有了，你要的是分数和修改意见。',
      body: '先打分，再列出要改的地方。点名 wechat-article-review。',
    },
    en: {
      title: 'WeChat article review',
      summary:
        'Score a WeChat article from 0 to 10 on fixed dimensions, and write the revision notes.',
      when: 'The draft exists, and what you want is a score plus what to change.',
      body: 'Score first, then list what to change. Name wechat-article-review.',
    },
  },
  {
    slug: 'wechat-review-pipeline',
    group: 'content',
    plugin: toolkit,
    related: ['wechat-article-review'],
    how: '请按审稿编排示例，说明这篇稿子要走哪些步骤。\n@<文章>',
    zh: {
      title: '审稿编排示例',
      summary: '演示审稿怎样分成并行、条件和每周回归几步。',
      when: '你要看一套审稿流程怎样拆开交给 Agent。',
      body: '这是一套给人看的编排例子。点名 wechat-review-pipeline。',
    },
    en: {
      title: 'Review pipeline example',
      summary:
        'Show how a review splits into parallel steps, conditions, and a weekly pass.',
      when: 'You want to see how a review process is broken up and handed to an agent.',
      body: 'This is an orchestration example meant to be read. Name wechat-review-pipeline.',
    },
  },
  {
    slug: 'article-value-forge',
    group: 'content',
    plugin: toolkit,
    related: ['nathan-article-voice'],
    how: '请根据这篇文章给 3 个标题和一段 100 字介绍。\n@<文章>',
    zh: {
      title: '文章标题与介绍',
      summary: '根据正文写出 3 个标题和一段大约 100 字的介绍。',
      when: '正文已经写完，你要换标题或补一段介绍。',
      body: '标题和介绍只根据文章里已有的内容来写。点名 article-value-forge。',
    },
    en: {
      title: 'Titles and introductions',
      summary:
        'Write 3 titles and an introduction of about 100 characters from the article body.',
      when: 'The body is finished, and you want a new title or an introduction.',
      body: 'Titles and the introduction use only what is already in the article. Name article-value-forge.',
    },
  },
  {
    slug: 'prd-three-layer-template',
    group: 'prompt',
    plugin: toolkit,
    related: ['prd-iterate', 'product-os'],
    how: '请把这段需求写成三层需求文档，并给出给研发用的精简版。\n@<需求素材>',
    zh: {
      title: '三层需求文档',
      summary: '把需求写成评审用的完整版，以及给研发用的精简版。',
      when: '你要一份既能评审、又能拿去编码的需求文档。',
      body: '完整版给人评审，精简版给研发和 Agent。交给主工作流时用精简版。点名 prd-three-layer-template。',
    },
    en: {
      title: 'Three-layer requirements',
      summary:
        'Write the full version for review, and a short version for engineering.',
      when: 'You want a requirements document that can be reviewed and also taken into coding.',
      body: 'The full version is for people to review. The short version is for engineering and the agent. Hand the short version to the main workflow. Name prd-three-layer-template.',
    },
  },
  {
    slug: 'prd-iterate',
    group: 'prompt',
    plugin: toolkit,
    related: ['prd-three-layer-template'],
    how: '请基于旧需求和新的变更，写出这一版需求文档。\n@<旧需求>\n@<新变更>',
    zh: {
      title: '迭代需求文档',
      summary: '对照上一版需求和新的变更，写出变更地图和这一版需求。',
      when: '需求不是第一版，你要在旧文档上迭代。',
      body: '同时给出旧文档和新的变更。点名 prd-iterate。',
    },
    en: {
      title: 'Iterate a requirements doc',
      summary:
        'Compare the previous requirements with the new changes, and write a change map plus this version.',
      when: 'This is not the first version, and you are iterating on an older document.',
      body: 'Provide the old document and the new changes together. Name prd-iterate.',
    },
  },
  {
    slug: 'product-os',
    group: 'prompt',
    plugin: toolkit,
    related: ['prd-three-layer-template', 'dev-doc-gate'],
    how: '请把这些需求资料收成一份可以拿去编码的精简需求。\n@<需求资料>',
    zh: {
      title: '需求资料收成可编码文档',
      summary: '把散落的需求资料收成一份可以拿去编码的精简需求。',
      when: '材料是聊天、纪要或旧文档，还不是一份开发文档。',
      body: '先收材料，再写成精简需求。点名 product-os。',
    },
    en: {
      title: 'Turn notes into a buildable spec',
      summary:
        'Collect scattered requirement notes into one short spec you can code from.',
      when: 'The material is chat, meeting notes, or an old document, not a development doc yet.',
      body: 'Collect the material first, then write the short requirements. Name product-os.',
    },
  },
  {
    slug: 'dev-doc-gate',
    group: 'prompt',
    plugin: toolkit,
    related: ['product-os', 'frontend-dev-prompt-craft'],
    how: '请判断这段需求要不要先写正式文档。\n@<需求提示>',
    zh: {
      title: '要不要写正式文档',
      summary:
        '判断这次提示够不够开发；够就留下最短记录，不够就去整理正式需求。',
      when: '你还不确定这次该直接开发，还是先写正式文档。',
      body: '够开发时只留下最短记录。不够时改走 product-os。点名 dev-doc-gate。',
    },
    en: {
      title: 'Whether to write a formal doc',
      summary:
        'Decide whether this prompt is enough to build from. If it is, keep the shortest record. If it is not, go write formal requirements.',
      when: 'You are not sure whether to build directly or write a formal document first.',
      body: 'When it is enough to build, keep only the shortest record. When it is not, switch to product-os. Name dev-doc-gate.',
    },
  },
  {
    slug: 'requirement-doc-gaps',
    group: 'prompt',
    plugin: toolkit,
    related: ['product-os'],
    how: '请核对这份需求文档的缺口，先列出清单，不要开始写代码。\n@<需求文档>',
    zh: {
      title: '需求缺口清单',
      summary: '编码前按清单核对需求文档还缺什么。',
      when: '开发文档已经有了，你担心里面有空档。',
      body: '先出清单。空档写明之后再决定是否编码。点名 requirement-doc-gaps。',
    },
    en: {
      title: 'Requirements gap list',
      summary:
        'Before coding, check the requirements document against a list and see what is still missing.',
      when: 'A development document exists, and you are worried it has gaps.',
      body: 'Produce the list first. Decide whether to code after the gaps are written down. Name requirement-doc-gaps.',
    },
  },
  {
    slug: 'frontend-dev-prompt-craft',
    group: 'prompt',
    plugin: toolkit,
    related: ['dev-doc-gate', 'loop-engineering'],
    how: '请把这段需求写成一份结构化的编码提示词，先不要改代码。\n@<需求>',
    zh: {
      title: '结构化编码提示词',
      summary: '在你点名要提示词时，把需求写成一份编码提示。',
      when: '你要的是一份提示词，而不是直接改仓库。',
      body: '只有你点名要提示词时才用。主工作流默认不经过它。点名 frontend-dev-prompt-craft。',
    },
    en: {
      title: 'Structured coding prompts',
      summary:
        'When you ask for a prompt, turn the request into a coding prompt.',
      when: 'You want a prompt, not a direct change to the repository.',
      body: 'Use it only when you ask for a prompt. The main workflow does not pass through it by default. Name frontend-dev-prompt-craft.',
    },
  },
  {
    slug: 'loop-engineering',
    group: 'prompt',
    plugin: toolkit,
    related: ['deliverable-acceptance-audit', 'grill-me'],
    how: '请从这份需求生成闭环工程文档。\n@<需求文档>',
    zh: {
      title: '闭环工程文档',
      summary:
        '把需求写成带锚定、执行、验证和退出条件的文档，也可以当作验收依据。',
      when: '你希望一份文档同时指导实现和验收。',
      body: '文档里写清怎么判断做完。主工作流的轻量档和迷你档会用到它。点名 loop-engineering。',
    },
    en: {
      title: 'Closed-loop engineering docs',
      summary:
        'Write the request as a document with anchors, execution, verification, and exit conditions. It can also be the acceptance basis.',
      when: 'You want one document to guide both implementation and acceptance.',
      body: 'The document says how to tell that the work is done. The lite and mini modes of the main workflow use it. Name loop-engineering.',
    },
  },
  {
    slug: 'grill-me',
    group: 'prompt',
    plugin: toolkit,
    related: ['loop-engineering', 'openspec-contract-authoring'],
    how: '请拷打这份方案，先给出问题和你建议的答案，我确认前不要实现。\n@<方案或需求>',
    zh: {
      title: '拷打方案',
      summary: '按领域、交互、实现计划和出货前四段来挑战一份方案。',
      when: '方案、需求或实现计划还没定，你希望先被追问。',
      body: '先问清，再动手。你确认之前不要改代码。点名 grill-me，或直接说「拷打」。',
    },
    en: {
      title: 'Grill the plan',
      summary:
        'Challenge a plan in four passes: domain, interaction, implementation plan, and before shipping.',
      when: 'The plan, the requirements, or the implementation plan is not settled, and you want to be questioned first.',
      body: 'Ask until it is clear, then build. Do not change code before you confirm. Name grill-me, or just say “拷打”.',
    },
  },
] as const satisfies readonly Skill[];

export const featuredSkillSlugs = [
  'grill-me',
  'pm-md-to-openspec-pipeline',
  'openspec-contract-authoring',
  'incremental-implementation',
  'code-verify',
  'deliverable-acceptance-audit',
] as const;

type ModeCopy = { title: string; summary: string };

export const workflow = {
  slug: 'ai-frontend-dev-workflow',
  plugins: [toolkit, 'ai-frontend-dev-workflow'] as const,
  stages: [
    { zh: '对齐', en: 'Align' },
    { zh: '契约', en: 'Contract' },
    { zh: '实现', en: 'Build' },
    { zh: '技术验证', en: 'Verify' },
    { zh: '验收', en: 'Accept' },
    { zh: '交付', en: 'Deliver' },
  ],
  modes: [
    {
      id: 'full',
      tone: 'bg-orange',
      zh: {
        title: 'Full',
        summary: '默认档。契约、实现、技术验证、验收都走。',
      },
      en: {
        title: 'Full',
        summary:
          'Default. Contract, build, technical verification, and acceptance all run.',
      },
      how: '请用 ai-frontend-dev-workflow 跑全流程：\n@<需求文档>\n@<业务仓库>\ntarget-mode: brownfield',
    },
    {
      id: 'lite',
      tone: 'bg-cyan',
      zh: {
        title: 'Lite',
        summary: '轻量档。用 Loop 文档当验收依据，不写 OpenSpec 四文件。',
      },
      en: {
        title: 'Lite',
        summary:
          'Light mode. Use the Loop document as the acceptance basis, and skip the four OpenSpec files.',
      },
      how: '请用 ai-frontend-dev-workflow 轻量模式：\n@<需求文档>\n@<业务仓库>\nworkflow-mode: lite',
    },
    {
      id: 'mini',
      tone: 'bg-green',
      zh: {
        title: 'Mini',
        summary: '最小档。Loop 加一份验收报告。',
      },
      en: {
        title: 'Mini',
        summary: 'Smallest mode. A Loop document plus one acceptance report.',
      },
      how: '请用 ai-frontend-dev-workflow 迷你模式：\n@<需求文档>\n@<业务仓库>\nworkflow-mode: mini',
    },
  ],
  zh: {
    title: '从需求到可验收的代码',
    summary:
      '说一声要用这套工作流，Agent 会从对齐走到交付。小改动用迷你档，一般改动用轻量档，完整需求用默认档。',
    intro:
      '在 Cursor 里说「请用 ai-frontend-dev-workflow」。两个插件都要安装。',
    points: [
      { name: 'workflow-orchestrator', detail: '排定档位和阶段顺序。' },
      { name: 'maker-agent', detail: '按已经写好的约定实现。' },
      { name: 'checker-agent', detail: '对照约定检查实现。' },
      { name: 'auditor-agent', detail: '对照验收条款看有没有做完。' },
      {
        name: 'verification-loop',
        detail: '技术验证没过就再改一轮。',
      },
      {
        name: 'acceptance-audit-loop',
        detail: '验收没过就再改一轮。',
      },
      {
        name: 'execution-audit-loop',
        detail: '回头看这次有没有跳过该走的步骤。',
      },
      {
        name: 'experience-persistence',
        detail: '把这次的教训留下来，下次开工前提醒。',
      },
      {
        name: 'skills-quality',
        detail: '维护技能自己的质量记录，不负责某一次需求怎么写。',
      },
    ],
  },
  en: {
    title: 'From a request to code you can accept',
    summary:
      'Say you want this workflow, and the agent walks from alignment to delivery. Tiny changes use mini, ordinary changes use lite, and a full request uses the default.',
    intro:
      'In Cursor, say “请用 ai-frontend-dev-workflow”. Both plugins need to be installed.',
    points: [
      {
        name: 'workflow-orchestrator',
        detail: 'Sets the mode and the stage order.',
      },
      {
        name: 'maker-agent',
        detail: 'Implements against the agreements already written.',
      },
      {
        name: 'checker-agent',
        detail: 'Checks the implementation against those agreements.',
      },
      {
        name: 'auditor-agent',
        detail: 'Checks the acceptance clauses to see what is unfinished.',
      },
      {
        name: 'verification-loop',
        detail: 'Runs another pass when technical verification fails.',
      },
      {
        name: 'acceptance-audit-loop',
        detail: 'Runs another pass when acceptance fails.',
      },
      {
        name: 'execution-audit-loop',
        detail: 'Looks back to see whether a required step was skipped.',
      },
      {
        name: 'experience-persistence',
        detail: 'Keeps the lesson from this pass and recalls it next time.',
      },
      {
        name: 'skills-quality',
        detail:
          'Keeps the quality record of the skills themselves. It does not write a particular request.',
      },
    ],
  },
} as const;

export type WorkflowMode = (typeof workflow.modes)[number];

type SkillEntry = (typeof skills)[number];

const skillBySlug = new Map<string, SkillEntry>(
  skills.map((skill) => [skill.slug, skill])
);

export function getSkill(slug: string) {
  return skillBySlug.get(slug);
}

export function featuredSkills() {
  return featuredSkillSlugs.map((slug) => {
    const skill = getSkill(slug);
    if (!skill) {
      throw new Error(`missing featured skill ${slug}`);
    }
    return skill;
  });
}

export function skillsInGroup(group: SkillGroupId) {
  return skills.filter((skill) => skill.group === group);
}

export function groupLabel(group: SkillGroupId, locale: AppLocale) {
  const found = skillGroups.find((item) => item.id === group);
  if (!found) {
    return group;
  }
  return found[locale];
}

export function practiceHref(locale: AppLocale, path: string) {
  return locale === 'zh' ? `/zh${path}` : path;
}

export function contentPaths() {
  const paths = [
    '/skills',
    '/workflows',
    ...skills.map((skill) => `/skills/${skill.slug}`),
    `/workflows/${workflow.slug}`,
  ];
  return paths.flatMap((path) => [path, `/zh${path}`]);
}

export function modeCopy(mode: WorkflowMode, locale: AppLocale): ModeCopy {
  return mode[locale];
}
