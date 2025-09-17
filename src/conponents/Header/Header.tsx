import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="bg-blue-500 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<nav>
					<div className="flex space-x-16  ">
						<Link to="/" className="text-xl font-bold text-inherit">
							My App
						</Link>
						<Link to="/login" className="text-white text-inherit">
							Login
						</Link>
						<Link to="/register" className="text-white text-inherit">
							Register
						</Link>
						<Link to="/" className="text-white text-inherit">
							News Feed
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};
