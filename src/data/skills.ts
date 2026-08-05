export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "前端",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "工程与协作",
    items: ["Git", "Vite", "ESLint", "Jest", "CI/CD"],
  },
  {
    category: "后端与数据",
    items: ["Node.js", "REST API", "PostgreSQL", "Prisma"],
  },
  {
    category: "设计与产品",
    items: ["Figma", "无障碍基础", "响应式设计", "信息架构"],
  },
];
