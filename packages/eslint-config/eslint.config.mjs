// check example like: https://github.com/adidahiya/raga/blob/main/eslint.config.mjs

import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	// ...tseslint.configs.recommendedTypeChecked,
	// ...tseslint.configs.stylisticTypeChecked,
	// ...tseslint.configs.strictTypeChecked,
	{
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,tsx}"],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
)
