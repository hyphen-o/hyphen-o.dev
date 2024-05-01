import { CardPortfolio } from "@/components/card"

type ListPortfoliosProps = {
  portfolios: {
      title: string
      description: string
      image_url: string
      url: string
  }[]
}

export const ListPortfolios = ({ portfolios }: ListPortfoliosProps) => {
  return (
    portfolios.map((portfolio) => {
      <CardPortfolio portfolio={portfolio}/>
    })
  )
}