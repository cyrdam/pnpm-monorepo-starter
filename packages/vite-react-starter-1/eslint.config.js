import defaultEslintConfiguration from '@shared/eslint-config';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// use types for eslint config object, but not for tseslint!
/* * @type {(import eslint from 'eslint').Linter.Config} */
export default tseslint.config(
	...defaultEslintConfiguration,
	{
		ignores: ["**/dist", "**/eslint.config.js"],
	},
	{
		plugins: {
			"react-refresh": reactRefresh,
			"react-hooks": reactHooks.configs.recommended,
		},

		rules: {
			"react-refresh/only-export-components": ["warn", {
				allowConstantExport: true,
			}],
		},
	},
);
