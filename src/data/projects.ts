export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "协作看板",
    description:
      "轻量级团队任务看板，支持拖拽排序、筛选与实时状态同步，聚焦清晰的信息层级与操作反馈。",
    tags: ["Next.js", "TypeScript", "DnD", "Tailwind"],
    image: "/projects/board.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "个人记账助手",
    description:
      "记录日常收支并可视化趋势的 Web 应用，强调录入效率与图表可读性。",
    tags: ["React", "Vite", "Chart", "LocalStorage"],
    image: "/projects/ledger.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "设计系统样例站",
    description:
      "展示按钮、表单、导航等基础组件的文档站点，统一交互状态与可访问性约定。",
    tags: ["Next.js", "Storybook", "a11y"],
    image: "/projects/design-system.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];
