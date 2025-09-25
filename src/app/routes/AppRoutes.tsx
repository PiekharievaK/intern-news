import type React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../../conponents/Layout/Layout";

const PrebidLogsPage = lazy(
	() => import("../../pages/PrebidLogsPage/PrebidLogsPage.tsx"),
);
const NewsPage = lazy(() => import("../../pages/NewsPage/NewsPage"));
const FullNewsPage = lazy(
	() => import("../../pages/FullNewsPage/FullNewsPage"),
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(
	() => import("../../pages/RegisterPage/RegisterPage"),
);

export const AppRoutes: React.FC = () => {
	return (
		<Suspense
			fallback={
				<div className="w-full h-full flex justify-center items-center">
					Loading...
				</div>
			}
		>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<NewsPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/news/:id" element={<FullNewsPage />} />
					<Route path="/prebid" element={<PrebidLogsPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};
