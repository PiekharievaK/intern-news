import type React from "react";
import "./config/theme";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from "./providers/ThemeProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App: React.FC = () => {
	return (
		<Router>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<AppRoutes />
				</ThemeProvider>
			</QueryClientProvider>
		</Router>
	);
};
