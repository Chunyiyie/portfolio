export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  title: string;
  summary: string;
  email: string;
  location: string;
  socials: SocialLink[];
};

export const profile: Profile = {
  name: "王一淳",
  title: "前端工程师 · 专注产品体验与工程质量",
  summary:
    "用清晰的界面与可靠的工程实践，把想法做成可上线的产品。喜欢打磨细节，也关注性能、可维护性与协作体验。",
  email: "hello@example.com",
  location: "中国",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};
