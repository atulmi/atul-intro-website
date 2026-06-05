export const education = {
  degree: "B.S. in Software Engineering",
  school: "San Jose State University",
  period: "2017 – 2021",
};

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
  },
];
