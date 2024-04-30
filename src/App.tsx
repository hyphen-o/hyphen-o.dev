import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

const App = () => {
	return (
		<>
			<div className="mx-auto">
				<Avatar className="w-40 h-40 text-center my-12">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<h1>Hi My name is Keigo Okamoto</h1>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
		</>
	);
}

export default App;
