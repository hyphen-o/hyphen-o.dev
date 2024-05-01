export type PortfolioLists = PortfolioType[];

export type PortfolioType = {
  id: string;
  createdAt: string;
  title: string;
  description: string;
  image_url: {
    url: string;
    height: number;
    width: number;
  };
  url: string;
};
