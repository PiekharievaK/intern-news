import { Link } from "react-router-dom";
import { ThemeButton } from "../ThemeButton/ThemeButton";

export const Header = () => {
	return (
		<header className="bg-[var(--header)]  text-[var(--header-t)]   p-4">
			<div className="container mx-auto flex justify-between items-center">
				<nav>
					<div className="flex space-x-16">
						<Link to="/" className="text-xl font-bold text-inherit">
							My App
						</Link>
						<Link
							to="/login"
							className="text-light-text dark:text-dark-text text-inherit"
						>
							Login
						</Link>
						<Link
							to="/register"
							className="text-light-text dark:text-dark-text text-inherit"
						>
							Register
						</Link>
						<Link
							to="/"
							className="text-light-text dark:text-dark-text text-inherit"
						>
							News Feed
						</Link>
					</div>
				</nav>
				<ThemeButton />
			</div>
		</header>
	);
};
