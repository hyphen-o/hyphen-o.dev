import { fetcher } from "@/api/fetcher";
import type { PortfolioLists } from "@/api/types";

export type PortfoliosResponse = {
  contents: PortfolioLists;
};

export const get = () => {
  return fetcher<PortfoliosResponse>("portfolios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
