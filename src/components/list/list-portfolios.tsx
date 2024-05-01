import { CardPortfolio } from "@/components/card";

import type { PortfolioLists } from "@/api/types";

type ListContactProps = {
  contacts: Readonly<PortfolioLists>;
};

type ListPortfoliosProps = {
  portfolios: Readonly<PortfolioLists>;
};

export const ListPortfolios = ({ portfolios }: ListPortfoliosProps) => {
  return (
    <>
      {portfolios.map((portfolio) => {
        return <CardPortfolio portfolio={portfolio} key={portfolio.id} />;
      })}
    </>
  );
};
