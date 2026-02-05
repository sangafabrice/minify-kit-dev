#!/usr/bin/env node

import fs from "node:fs";
import { JSHINT } from "jshint";

function log(file, { errors: warnings }) {
    console.log(
        "%s jshint %s",
        !warnings.length ? "✔" : "✖",
        file
    );
    for (const {
        line,
        character: column,
        reason: message
    } of warnings) {
        console.log(" %d:%d %s", line, column, message);
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