import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);
const compat = new FlatCompat({
	baseDirectory: dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ["**/dist", "**/eslint.config.js"],
	},
	...fixupConfigRules(compat.extends("@shared/eslint-config", "plugin:react-hooks/recommended")), {
		plugins: {
			"react-refresh": reactRefresh,
		},

		languageOptions: {
			globals: {
				...globals.browser,
			},
		},

		rules: {
			"react-refresh/only-export-components": ["warn", {
				allowConstantExport: true,
			}],
		},
	}
];
