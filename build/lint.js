#!/usr/bin/env node

import { JSHINT } from "jshint";
import fs from "node:fs";

function log(file, { errors }) {
    console.log(
        "%s jshint %s",
        !errors.length ? "✔" : "✖",
        file
    );
    for (const { line, character, reason } of errors) {
        console.log(" %d:%d %s", line, character, reason);
    }
}

async function main(files) {
    for (const file of files) {
        const source = fs.readFileSync(file, "utf8");
        JSHINT(source, { esversion: 11 });
        log(file, JSHINT);
    }
}

main(
    fs.globSync("**/*.{js,mjs,cjs,json}", {
        exclude: [
            "node_modules/**",
            ".vscode/**",
            "flow-typed/**",
            "**/package-lock.json"
        ]
    })
);