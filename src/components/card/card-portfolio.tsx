import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"
import {
	ArrowRightIcon
} from "@radix-ui/react-icons";

type CardPortfolioProps = {
  portfolio: {
    title: string
    description: string
    image_url: string
    url: string
  }
}

export const CardPortfolio = ({ portfolio }: CardPortfolioProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{ portfolio.title }</CardTitle>
        <CardDescription>
          {portfolio.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img src={portfolio.image_url} alt={portfolio.title} className="w-14 h-14" />
      </CardContent>
      <Separator className="opacity-50" />
      <CardFooter>
        <a
          href={portfolio.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center space-x-1"
          >
          <ArrowRightIcon />
          Go to GitHub Repository
        </a>
      </CardFooter>
    </Card>
  )
}