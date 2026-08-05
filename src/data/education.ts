export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
};

export const education: EducationItem[] = [
  {
    school: "华中科技大学",
    degree: "建筑与城市规划学院 · 设计学 · 硕士",
    period: "2018.09 — 2021.07",
    highlights: [
      "参与 2 项国家社科基金艺术学项目，覆盖田野调研、纹样提取到论文撰写",
      "硕士毕业论文源于导师国家社科基金课题",
      "获校级二等奖学金 3 次，获米兰设计周国家级奖项",
    ],
  },
  {
    school: "湖北美术学院",
    degree: "工业设计系 · 展示设计 · 学士",
    period: "2012.09 — 2016.07",
    highlights: [
      "多次获校级奖学金、“三好学生”、“优秀团员”",
      "2013-2014 学年获“优秀团员”和三等奖学金",
      "2012-2013 学年获“三好学生”和二等奖学金",
    ],
  },
];
