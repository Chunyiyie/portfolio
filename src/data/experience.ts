export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "示例科技有限公司",
    role: "前端工程师",
    period: "2023 — 至今",
    highlights: [
      "负责核心产品 Web 端迭代，落地设计系统与组件库，提升研发复用效率",
      "将关键页面 LCP 优化约 35%，并完善埋点与错误监控",
      "与设计、后端协作推进需求拆解与上线节奏，保障迭代稳定交付",
    ],
  },
  {
    company: "示例互联网公司",
    role: "前端开发实习生",
    period: "2022 — 2023",
    highlights: [
      "参与后台管理系统重构，使用 React + TypeScript 替换遗留页面",
      "编写可复用表格与表单组件，减少重复业务代码",
      "配合完成灰度发布与线上问题排查",
    ],
  },
];
