export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "UX / 研究方法",
    items: [
      "用户研究",
      "可用性测试",
      "Google UX 认证",
      "产品设计方法论",
      "数据驱动研究",
    ],
  },
  {
    category: "设计工具",
    items: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "InDesign",
      "CorelDRAW",
    ],
  },
  {
    category: "空间 / 三维",
    items: ["AutoCAD", "SketchUp", "Lumion"],
  },
  {
    category: "AI 与分析",
    items: [
      "Vibe Coding",
      "Cursor",
      "Claude Code",
      "Codex",
      "SPSS",
      "AI 产品体验",
    ],
  },
];
