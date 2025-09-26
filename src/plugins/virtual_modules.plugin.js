import * as fs from "fs";
import * as path from "path";
import { config } from "process";

function virtualModules() {
	return {
		name: "virtual-modules",

		resolveId(id) {
			if (id === "virtual:plugins") {
				return id;
			}
			return null;
		},

		async load(id) {
			if (id === "virtual:plugins") {
				const plugins = this.environment.config.env.VITE_VIRTUAL_PLUGINS;
				console.log(plugins);
				const modules = plugins.split(",");

				if (modules.length > 0) {
					const importStatements = await Promise.all(
						modules.map(async (item) => {
							const modulePath = path.resolve(
								__dirname,
								`../../src/modules/${item}.module.ts`,
							);

							try {
								await fs.promises.access(modulePath, fs.constants.F_OK);
								return `import './src/modules/${item}.module.ts';`;
							} catch {
								console.warn(`Module not found: ${modulePath}`);
								return "";
							}
						}),
					);

					return importStatements.filter(Boolean).join("\n");
				}

				return "console.warn('No modules found in VIRTUAL_PLUGINS');";
			}

			return null;
		},
	};
}

export default virtualModules;
