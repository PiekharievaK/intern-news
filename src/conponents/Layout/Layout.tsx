import type React from "react";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const Layout: React.FC = () => {
	return (
		<div className="min-h-screen bg-header min-w-screen flex flex-col">
			<Header />
			<main className="flex-1 container mx-auto p-4">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
