export type Project = {
  title: string;
  description: string;
  place: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projectCategories = [
  "全部",
  "产品",
  "工具",
  "设计系统",
] as const;

export const projects: Project[] = [
  {
    title: "协作看板",
    description:
      "轻量级团队任务看板，支持拖拽排序、筛选与实时状态同步，聚焦清晰的信息层级与操作反馈。",
    place: "Web Product",
    category: "产品",
    tags: ["Next.js", "TypeScript", "DnD", "Tailwind"],
    image: "/projects/board.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "个人记账助手",
    description:
      "记录日常收支并可视化趋势的 Web 应用，强调录入效率与图表可读性。",
    place: "Personal Tool",
    category: "工具",
    tags: ["React", "Vite", "Chart", "LocalStorage"],
    image: "/projects/ledger.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "设计系统样例站",
    description:
      "展示按钮、表单、导航等基础组件的文档站点，统一交互状态与可访问性约定。",
    place: "Design System",
    category: "设计系统",
    tags: ["Next.js", "Storybook", "a11y"],
    image: "/projects/design-system.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "日程管理台",
    description:
      "面向日常安排的轻量日程界面，强调时间块可读性与快速录入。",
    place: "Productivity",
    category: "工具",
    tags: ["React", "TypeScript", "Calendar"],
    image: "/projects/schedule.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "内容发布台",
    description:
      "面向创作者的内容草稿与发布流程原型，突出状态流转与预览体验。",
    place: "CMS Prototype",
    category: "产品",
    tags: ["Next.js", "MDX", "Editor"],
    image: "/projects/publish.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "组件实验室",
    description:
      "探索交互动效与可访问性细节的组件实验场，记录可复用模式。",
    place: "Lab",
    category: "设计系统",
    tags: ["React", "Motion", "a11y"],
    image: "/projects/lab.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];
