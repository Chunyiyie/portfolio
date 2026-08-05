export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "自由职业",
    role: "UX 研究与项目实践",
    period: "2026.01 — 至今",
    highlights: [
      "完成 Google UX 认证课程学习与项目实践",
      "开展 AI 产品应用与体验实践",
      "进行 Vibe Coding 实践：使用 Claude Code、Cursor、Codex 等 AI 编程工具快速搭建应用原型，体验 AI 辅助开发流程",
    ],
  },
  {
    company: "浙江大学研学",
    role: "交互设计方向",
    period: "2025.08 — 2025.12",
    highlights: [
      "修读交互设计核心课程：统计学、数据挖掘、产品开发流程与设计理论",
      "强化以用户为中心的设计思维与数据驱动研究方法",
    ],
  },
  {
    company: "自由职业",
    role: "UX 方法论系统学习",
    period: "2024.03 — 2025.07",
    highlights: [
      "启动 Google UX 认证学习，系统掌握 UX 方法论与设计实践",
    ],
  },
  {
    company: "艺境文化有限公司",
    role: "科研助理（兼职）",
    period: "2023.11 — 2024.02",
    highlights: [
      "文献研究：围绕艺术融入乡村建设等主题检索与研读学术论文，梳理国内外案例与方法",
      "汇报输出：用思维导图梳理逻辑与结论，并通过 PPT 呈现研究成果",
    ],
  },
  {
    company: "襄阳市建筑设计研究院",
    role: "景观设计师",
    period: "2021.07 — 2023.05",
    highlights: [
      "需求分析：对接甲方诉求，形成可执行的设计方案",
      "全流程管理：从方案设计到施工图与规划文本",
      "独立完成 44 个项目，覆盖景观汇报、工程咨询与竣工验收等环节",
    ],
  },
  {
    company: "民发实业集团有限公司",
    role: "开发设计部实习生",
    period: "2020.06 — 2020.09",
    highlights: [
      "现场跟进：定期前往工地查看施工进度，核对设计方案落地情况",
      "品质验收：对样板间进行逐项验收，检查空间尺度、材料质感与细节完成度",
    ],
  },
  {
    company: "深圳市杰尔斯展示股份有限公司",
    role: "空间设计师",
    period: "2016.07 — 2017.05",
    highlights: [
      "根据项目资料、公司理念与发展历程提出设计理念和设计元素",
      "基于确定的设计思路进行空间设计并输出效果图",
      "协助平面设计与策划完成项目相关工作",
    ],
  },
];
