#!/usr/bin/env node

import fs from "node:fs/promises";
import prettier from "prettier";

function log(filepath, error) {
    const message = error?.message ?? "";
    console.log(
        (message.length ? "✖ failed" : "✔ formatted") +
            " %s",
        filepath,
        message
    );
}

async function main(files) {
    for await (const filepath of files)
        Promise.allSettled([
            fs.readFile(filepath, "utf8"),
            prettier.resolveConfig(filepath)
        ])
            .then(
                ({
                    0: { value: raw },
                    1: { value: config }
                }) =>
                    prettier.format(
                        raw,
                        Object.assign(config, { filepath })
                    )
            )
            .then(
                String.prototype.trim.call.bind(
                    String.prototype.trim
                )
            )
            .then(fs.writeFile.bind(fs, filepath))
            .then(log.bind(null, filepath))
            .catch(log.bind(null, filepath));
}

main(
    fs.glob("**/*.{js,cjs,mjs,html,css,json,flow}", {
        exclude: [
            "**/node_modules/**",
            "dist/**",
            "lib/**",
            "**/package-lock.json",
            "demo/package.json"
        ]
    })
);