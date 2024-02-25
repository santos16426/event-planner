export type TSection = {
  index: number;
  type: 'Home' | 'Story' | 'Schedule' | 'Registry' | 'FAQs' | 'Directions';
  isVisible: boolean;
  backgroundImage: string;
};
export type TDetails = {};
export type TTheme = {
  font: string;
  style: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
};
export type TTemplate = {
  sections: TSection[];
  details: TDetails;
  theme: TTheme;
};
