export interface RecommendItems {
  id: number;
  img: string;
  title: string;
  keywords: string[];
  hot: boolean;
}

export interface FilterItems {
  title: string;
  contents: string[];
  selected: string[];
  setSelected: (newSelected: string[]) => void;
}

export interface ExperienceRecommendItems {
  id: number;
  img: string;
  title: string;
  subtitle: string;
}
