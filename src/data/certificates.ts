export type Certificate = {
  title: string;
  issuer: string;
  recipient: string;
  date: string;
  verifyUrl: string;
  summary: string;
  courses: string[];
};

export const certificates: Certificate[] = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google · Coursera",
    recipient: "懿纯 王",
    date: "2026.06.23",
    verifyUrl: "https://coursera.org/verify/professional-cert/XCVNV964L29Y",
    summary:
      "完成由 Google 设计的 8 门课程，涵盖从共情用户、定义痛点、构思方案，到线框、高保真原型与测试反馈的完整 UX 设计流程，为入门级 UX 设计岗位做好准备。",
    courses: [
      "Foundations of User Experience (UX) Design",
      "Start the UX Design Process: Empathize, Define, and Ideate",
      "Build Wireframes and Low-Fidelity Prototypes",
      "Conduct UX Research and Test Early Concepts",
      "Create High-Fidelity Designs and Prototypes in Figma",
      "Build Dynamic User Interfaces (UI) for Websites",
      "Design a User Experience for Social Good & Prepare for Jobs",
      "Accelerate Your Job Search with AI",
    ],
  },
];
