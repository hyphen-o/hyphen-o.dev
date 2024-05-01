import * as fetchPortfolios from "@/api/portfolio";
import type { PortfolioLists } from "@/api/types";
import { useEffect, useState } from "react";

export const useGetPortfolios = () => {
  const [portfolios, setPortfolios] = useState<PortfolioLists>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const getPortfolios = async () => {
      const res = await fetchPortfolios.get();
      setPortfolios(res.contents);
    };

    getPortfolios();
    setIsLoading(false);
  }, []);

  return { portfolios, isLoading };
};
