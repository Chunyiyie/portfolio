export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
};

export const education: EducationItem[] = [
  {
    school: "示例大学",
    degree: "计算机科学与技术 · 学士",
    period: "2018 — 2022",
    highlights: [
      "主修数据结构、操作系统、计算机网络与软件工程",
      "毕业设计：基于 React 的协作文档编辑器原型",
      "GPA 3.7 / 4.0",
    ],
  },
  {
    school: "示例高中",
    degree: "理科",
    period: "2015 — 2018",
    highlights: ["信息学竞赛校队成员", "校级科技创新一等奖"],
  },
];
