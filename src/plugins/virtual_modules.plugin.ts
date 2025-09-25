function virtualModules() {
	return {
		name: "virtual-modules",

		resolveId(id: string) {
			if (id === "virtual:plugins") {
				return id;
			}
			return null;
		},

		async load(id: string) {
			if (id === "virtual:plugins") {
				const modules = ["prebidModule"];
				if (modules) {
					return modules
						.map((item: string) => `import './src/modules/${item}.module.ts';`)
						.join("\n");
				}

				return "console.warn('No modules found in VIRTUAL_PLUGINS');";
			}

			return null;
		},
	};
}

export default virtualModules;
