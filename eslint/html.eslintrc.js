import { defineConfig } from "eslint/config";
import html from "@html-eslint/eslint-plugin";

export default defineConfig({
    files: ["demo/index.{js,mjs,cjs}"],
    plugins: { html },
    extends: ["html/recommended"],
    rules: {
        "html/require-button-type": "error",
        "html/indent": "off",
        "html/require-closing-tags": [
            "warn",
            { selfClosing: "always" }
        ]
    }
});