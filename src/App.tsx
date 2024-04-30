import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Separator } from "./components/ui/separator";
import {
	ArrowRightIcon,
	ChevronRightIcon,
	EnvelopeClosedIcon,
	GitHubLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "./components/ui/hover-card";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./components/ui/card";

const App = () => {
	return (
		<>
			<div className="flex flex-col items-center">
				<Avatar className="w-40 h-40 text-center mt-12 mb-6">
					<AvatarImage src="images/profile.png" alt="@shadcn" />
					<AvatarFallback>Image</AvatarFallback>
				</Avatar>
				<div>
					<div className="bg-gray-800 py-1 px-3 rounded-sm">
						<h1 className="flex flex-row items-center space-x-2">
							<ChevronRightIcon />
							<p>Hi, My name is Keigo Okamoto.</p>
						</h1>
						<h1 className="mb-1 flex flex-row items-center space-x-2">
							<ChevronRightIcon />
							<p>I`m frontend engineer.</p>
						</h1>
					</div>
					<Separator className="opacity-50 my-6" />
					<div className="space-y-4">
						<div className="flex flex-row items-center text-sm space-x-2">
							<GitHubLogoIcon className="w-7 h-7" />
							<HoverCard>
								<HoverCardTrigger>
									<a href="https://github.com/hyphen-o">@hyphen-o</a>
								</HoverCardTrigger>
								<HoverCardContent>https://github.com/hyphen-o</HoverCardContent>
							</HoverCard>
						</div>
						<div className="flex flex-row items-center text-sm space-x-2">
							<TwitterLogoIcon className="w-7 h-7" />
							<HoverCard>
								<HoverCardTrigger>
									<a href="https://twitter.com/khyphen_o">@khyphen_o</a>
								</HoverCardTrigger>
								<HoverCardContent>
									https://twitter.com/khyphen_o
								</HoverCardContent>
							</HoverCard>
						</div>
						<div className="flex flex-row items-center text-sm space-x-2">
							<EnvelopeClosedIcon className="w-7 h-7" />
							<HoverCard>
								<HoverCardTrigger>
									<a href="khypheno@gmail.com">khypheno@gmail.com</a>
								</HoverCardTrigger>
								<HoverCardContent>
									https://twitter.com/khyphen_o
								</HoverCardContent>
							</HoverCard>
						</div>
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
			</div>
		</>
	);
};

export default App;
