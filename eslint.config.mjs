import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactNative from "eslint-plugin-react-native";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    eslintPluginPrettierRecommended,
    {
        ignores: ["dist/*", "scripts/*"]
    },
    ...compat.extends("expo"),
    ...compat.extends("plugin:prettier/recommended"),
    {
        plugins: {
            react: eslintPluginReact,
            "react-hooks": eslintPluginReactHooks,
            "react-native": fixupPluginRules(eslintPluginReactNative)
        },
        rules: {
            quotes: ["off"],
            "comma-dangle": ["error", "never"],
            "max-len": ["warn", { code: 120, comments: 200 }],
            "no-return-assign": "error",
            "no-tabs": "off",
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            "react-native/no-unused-styles": "error",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error"
        }
    }
];
