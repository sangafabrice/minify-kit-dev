import { defineConfig } from "eslint/config";
import flowconfig from "./eslint/flow.eslintrc.js";
import htmlconfig from "./eslint/html.eslintrc.js";
import jsconfig from "./eslint/js.eslintrc.js";
import jshtmconfig from "./eslint/jshtm.eslintrc.js";

export default defineConfig({
    extends: [
        jsconfig,
        flowconfig,
        htmlconfig,
        jshtmconfig
    ],
    linterOptions: { reportUnusedDisableDirectives: "warn" }
});