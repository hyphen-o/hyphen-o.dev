import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import { Container } from "@/components/container";
import { CardProfile } from "@/components/card";
import { ListContact, ListPortfolios } from "@/components/list";
import { ContactList } from "@/components/constant";
import { useGetPortfolios } from "./hooks";
import { Skeleton } from "./components/ui/skeleton";

const App = () => {
  const {portfolios, isLoading} = useGetPortfolios();

  return (
    <>
      <Container>
        <Avatar className="w-40 h-40 text-center mt-12 mb-6">
          <AvatarImage src="images/profile.png" alt="@hyphen-o" />
          <AvatarFallback>Image</AvatarFallback>
        </Avatar>
        <div>
          <CardProfile />
          <Separator className="opacity-50 my-6" />
          <div className="space-y-4">
            <ListContact contacts={ContactList} />
          </div>
          <Separator className="opacity-50 my-6" />
          <h1 className="text-lg mb-2 font-bold">Porfolio</h1>
          <div className="space-y-4 mb-8">
						{
							isLoading ? <Skeleton className="h-96" /> : <ListPortfolios portfolios={portfolios} />
						}
          </div>
        </div>
      </Container>
    </>
  );
};

export default App;
