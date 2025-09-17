import type React from "react";

export const RegisterPage: React.FC = () => {
	return (
		<div className="max-w-md mx-auto p-4">
			<h2 className="text-2xl font-bold mb-6">Register</h2>
			<form className="space-y-4">
				<div>
					<label htmlFor="name" className="block">
						Name
					</label>
					<input
						type="text"
						name="name"
						className="w-full p-2 border rounded"
						placeholder="Enter your name"
					/>
				</div>
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
				<div>
					<label htmlFor="confirmPassword" className="block">
						Confirm Password
					</label>
					<input
						type="password"
						name="confirmPassword"
						className="w-full p-2 border rounded"
						placeholder="Confirm your password"
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
					Register
				</button>
			</form>
			<div className="mt-4 text-center">
				<p>
					Already have an account?{" "}
					<a href="/login" className="text-blue-500">
						Login here
					</a>
				</p>
			</div>
		</div>
	);
};
