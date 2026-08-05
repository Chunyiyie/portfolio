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
  "UX研究",
  "AI实践",
  "空间设计",
  "学术研究",
] as const;

export const projects: Project[] = [
  {
    title: "Google UX 认证实践",
    description:
      "完成 Google UX 认证课程中的完整用户研究与产品设计流程，覆盖问题定义、用户访谈、线框与原型，以及可用性测试。",
    place: "UX Certification",
    category: "UX研究",
    tags: ["Google UX", "User Research", "Prototype", "Usability Test"],
    image: "/projects/board.svg",
  },
  {
    title: "Vibe Coding 原型实验",
    description:
      "使用 Claude Code、Cursor、Codex 等 AI 编程工具快速搭建应用原型，探索 AI 辅助开发与产品体验验证的工作流。",
    place: "AI Practice",
    category: "AI实践",
    tags: ["Cursor", "Claude Code", "Codex", "Prototype"],
    image: "/projects/lab.svg",
  },
  {
    title: "浙江大学交互设计研学",
    description:
      "系统学习统计学、数据挖掘、产品开发流程与设计理论，强化以用户为中心的设计思维与数据驱动研究方法。",
    place: "Zhejiang University",
    category: "UX研究",
    tags: ["Interaction Design", "Data", "Product Process"],
    image: "/projects/publish.svg",
  },
  {
    title: "艺术融入乡村建设研究",
    description:
      "在艺境文化担任科研助理期间，围绕艺术融入乡村建设开展文献研究，梳理国内外案例与方法，并完成成果汇报。",
    place: "Research",
    category: "学术研究",
    tags: ["Literature Review", "Case Study", "Presentation"],
    image: "/projects/schedule.svg",
  },
  {
    title: "景观设计全流程项目",
    description:
      "在襄阳市建筑设计研究院期间，独立完成 44 个项目，覆盖需求分析、方案设计、施工图、规划文本与验收环节。",
    place: "Xiangyang",
    category: "空间设计",
    tags: ["Landscape", "Construction Docs", "Client Delivery"],
    image: "/projects/design-system.svg",
  },
  {
    title: "展示空间设计实践",
    description:
      "在杰尔斯展示期间，基于品牌理念提炼设计元素，完成空间方案与效果图，并协同平面与策划推进项目落地。",
    place: "Shenzhen",
    category: "空间设计",
    tags: ["Spatial Design", "Rendering", "Exhibition"],
    image: "/projects/ledger.svg",
  },
];
