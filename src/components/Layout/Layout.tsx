import type React from "react";
import { Footer } from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { ToastContainer } from "react-toastify";
import { Loader } from "../Loader/Loader";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";

export const Layout: React.FC = () => {
	const isFetching = useIsFetching();
	const isMutating = useIsMutating();

	const isLoading = isFetching > 0 || isMutating > 0;

	return (
		<div className="min-h-screen w-full flex flex-col">
			<Header />
			<main className="flex-1 container mx-auto p-4">
				<Outlet />
			</main>
			<Footer />
			<ToastContainer />
			{isLoading && <Loader />}
		</div>
	);
};
