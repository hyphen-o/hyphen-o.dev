import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import {
	ArrowRightIcon
} from "@radix-ui/react-icons";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";
import { Container } from "@/components/container";
import { CardProfile } from "@/components/card";
import { ListContact } from "@/components/list";
import { ContactList } from "@/components/constants";

const App = () => {
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
						<Card>
							<CardHeader>
								<CardTitle>Eatit</CardTitle>
								<CardDescription>
									Grow dinosaurs with github grass!
								</CardDescription>
							</CardHeader>
							<CardContent>
								<img src="images/eatit.png" alt="eatit" className="w-14 h-14" />
							</CardContent>
							<Separator className="opacity-50" />
							<CardFooter>
								<a
									href="https://github.com/coding-chaos-company/eatit"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-row items-center space-x-1"
									>
									<ArrowRightIcon />
									Go to GitHub Repository
								</a>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>どれカラ</CardTitle>
								<CardDescription>カラオケ選曲アプリ</CardDescription>
							</CardHeader>
							<CardContent>
								<img
									src="images/dorekara.png"
									alt="eatit"
									className="w-14 h-14"
									/>
							</CardContent>
							<Separator className="opacity-50" />
							<CardFooter>
								<a
									href="https://github.com/hyphen-o/dorekara-client"
									target="_blank"
									rel="noopener noreferrer"
									className="flex flex-row items-center space-x-1"
									>
									<ArrowRightIcon />
									Go to GitHub Repository
								</a>
							</CardFooter>
						</Card>
					</div>
				</div>
			</Container>
		</>
	);
};

export default App;
