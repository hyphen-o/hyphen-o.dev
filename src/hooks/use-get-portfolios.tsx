import { useEffect, useState } from "react";
import * as fetchPortfolios from "@/api/portfolio";
import type { PortfolioLists } from "@/api/types";

export const useGetPortfolios = () => {
  const [portfolios, setPortfolios] = useState<PortfolioLists>([]);

  useEffect(() => {
    const getPortfolios = async () => {
      const res = await fetchPortfolios.get();
      setPortfolios(res.contents);
    };

    getPortfolios();
  }, []);

  return portfolios;
};
