export type EducationDataParams = {
  university: string;
  qualification: string;
  years: string;
};

export type ExperienceDataParams = {
  company: string;
  qualification: string;
  years: string;
};

export type QualificationDataParams = {
  title: string;
  data: EducationDataParams[] | ExperienceDataParams[];
};
