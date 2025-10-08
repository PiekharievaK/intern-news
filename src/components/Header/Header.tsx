import { Link } from "react-router-dom";
import { ThemeButton } from "../ThemeButton/ThemeButton";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../api/logOut";

export const Header = () => {
	const { isAuthenticated, login } = useAuthStore();
	const navigate = useNavigate();
	const mutationLogout = useLogout();
	const handleLogout = () => {
		mutationLogout.mutate();
		navigate("/login");
	};
	const virtualPlugins = import.meta.env.VITE_VIRTUAL_PLUGINS;

	const isStatsModuleEnabled = virtualPlugins?.includes("statsModule");
	const isPrebidModuleEnabled = virtualPlugins?.includes("prebidModule");

	return (
		<header className="bg-[var(--header)] text-[var(--header-t)] p-4">
			<div className="container mx-auto flex justify-between items-center">
				<nav>
					<div className="flex space-x-16">
						<Link to="/" className="text-xl font-bold text-inherit">
							My App
						</Link>
						{!isAuthenticated && (
							<>
								<Link to="/login" className="text-inherit">
									Login
								</Link>
								<Link to="/register" className="text-inherit">
									Register
								</Link>
							</>
						)}
						<Link to="/news" className="text-inherit">
							News Feed
						</Link>
						{isAuthenticated && (
							<>
								{isPrebidModuleEnabled && (
									<Link to="/prebid" className="text-inherit">
										Prebids Log
									</Link>
								)}
								{isStatsModuleEnabled && (
									<Link to="/statistics" className="text-inherit">
										Statistics
									</Link>
								)}
								<Link to="/lineItem" className="text-inherit">
									Line Item
								</Link>
							</>
						)}
					</div>
				</nav>
				<div className="flex items-center gap-4">
					<ThemeButton />
					{isAuthenticated && (
						<>
							<p className="text-sm">{login}</p>
							<button
								type="button"
								className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
								onClick={handleLogout}
							>
								Log Out
							</button>
						</>
					)}
				</div>
			</div>
		</header>
	);
};
