import type React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../../conponents/Layout/Layout";
import { NewsPage } from "../../pages/NewsPage/NewsPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import FullNewsPage from "../../pages/FullNewsPage/FullNewsPage";

export const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<NewsPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/news/:id" element={<FullNewsPage />} />
			</Route>
		</Routes>
	);
};
