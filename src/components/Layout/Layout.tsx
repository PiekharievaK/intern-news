import type React from "react";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { ToastContainer } from "react-toastify";

export const Layout: React.FC = () => {
	return (
		<div className="min-h-screen w-full flex flex-col">
			<Header />
			<main className="flex-1 container mx-auto p-4">
				<Outlet />
			</main>
			<Footer />
			<ToastContainer />
		</div>
	);
};
