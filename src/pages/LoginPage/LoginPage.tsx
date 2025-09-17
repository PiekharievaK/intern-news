import type React from "react";

export const LoginPage: React.FC = () => {
	return (
		<div className="max-w-md mx-auto p-4">
			<h2 className="text-2xl font-bold mb-6">Login</h2>
			<form className="space-y-4">
				<div>
					<label htmlFor="email" className="block">
						Email
					</label>
					<input
						type="email"
						name="email"
						className="w-full p-2 border rounded"
						placeholder="Enter your email"
					/>
				</div>
				<div>
					<label htmlFor="password" className="block">
						Password
					</label>
					<input
						type="password"
						name="password"
						className="w-full p-2 border rounded"
						placeholder="Enter your password"
					/>
				</div>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						window.alert("Submit");
						return;
					}}
					className="w-full bg-blue-500 text-black py-2 rounded"
				>
					Login
				</button>
			</form>
			<div className="mt-4 text-center">
				<p>
					Don't have an account?{" "}
					<a href="/register" className="text-blue-500">
						Register here
					</a>
				</p>
			</div>
		</div>
	);
};
