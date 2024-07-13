// import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsConfigRecommended from '@typescript-eslint/recommended';
import globals from "globals";
// import path from "node:path";
// import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url);
// const dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//     baseDirectory: dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all
// });

export default [
    // ...compat.extends("eslint:recommended", "plugin:@typescript-eslint/recommended"),
		...js.configs.recommended,
		...tsConfigRecommended,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },

            parser: tsParser,
        },
    },
];
