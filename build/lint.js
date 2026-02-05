#!/usr/bin/env node

/*jslint-disable*/
import fs from "node:fs/promises";
import jslint from "@jslint-org/jslint";

function log(file, { warnings }) {
    console.log("jslint %s", file);
    for (const { line, column, message } of warnings) {
        console.log(" %d:%d %s", line, column, message);
    }
}

async function main(files) {
    for await (const file of files) {
        fs.readFile(file, "utf8")
            .then(jslint)
            .then(log.bind(null, file))
            .catch(console.error);
    }
}

main(fs.glob("**/*.{js,mjs,cjs,json}", {
    exclude: [
        "node_modules/**",
        ".vscode/**",
        "flow-typed/**",
        "**/package-lock.json"
    ]
}));
/*jslint-enable*/