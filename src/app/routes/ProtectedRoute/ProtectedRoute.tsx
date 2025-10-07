import type React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
	const isLoggedIn = sessionStorage.getItem("isAuthenticated") === "true";

	if (!isLoggedIn) {
		return <Navigate to="/login" />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
