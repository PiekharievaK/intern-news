import type React from "react";
import './config/theme'
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { ThemeProvider } from "./providers/ThemeProvider";

export const App: React.FC = () => {
	return (
		<Router>
			<ThemeProvider>
				<AppRoutes />
			</ThemeProvider>
		</Router>
	);
};
