import type React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.tsx";

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
const StatisticsPage = lazy(
	() => import("../../pages/StatisticsPage/StatisticsPage.tsx"),
);

const LineItemPage = lazy(
	() => import("../../pages/LineItemPage/LineItemPage.tsx"),
);

export const AppRoutes: React.FC = () => {
	const virtualPlugins = import.meta.env.VITE_VIRTUAL_PLUGINS;

	const isStatsModuleEnabled = virtualPlugins?.includes("statsModule");
	const isPrebidModuleEnabled = virtualPlugins?.includes("prebidModule");

	return (
		<Suspense
			fallback={
				<div className="w-full h-full flex justify-center items-center">
					Loading...
				</div>
			}
		>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Navigate to="news" replace />} />
					<Route path="news" element={<NewsPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="news/:id" element={<FullNewsPage />} />

					<Route element={<ProtectedRoute />}>
						{isPrebidModuleEnabled && (
							<Route path="prebid" element={<PrebidLogsPage />} />
						)}
						{isStatsModuleEnabled && (
							<Route path="statistics" element={<StatisticsPage />} />
						)}
						<Route path="lineItem" element={<LineItemPage />} />
					</Route>
				</Route>
			</Routes>
		</Suspense>
	);
};
