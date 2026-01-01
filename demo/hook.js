import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
[
    "flow-remove-types/register",
    "./log",
    "./index"
].forEach(require);