export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  socials: SocialLink[];
};

export const profile: Profile = {
  name: "王懿纯",
  title: "设计学硕士 · UX 研究 / 产品体验",
  summary:
    "设计学硕士，具备学术研究和设计实践能力。完成 Google UX 认证课程和浙江大学交互设计研学进修，系统掌握用户研究与产品设计方法论。进行 AI 产品体验与 Vibe Coding 实践，有 AI 产品的使用与搭建经验。善于从用户与业务场景中发现关键问题，输出可落地的方案。有跨团队协调和方案汇报经验。虽然没有企业 UX 经验，但在课程项目中完整实践了用户研究，具备独立开展测试的能力。正在寻求产品与用户研究方向的长期发展机会。",
  email: "wyichun@foxmail.com",
  phone: "19522915911",
  location: "中国",
  socials: [{ label: "Email", href: "mailto:wyichun@foxmail.com" }],
};
