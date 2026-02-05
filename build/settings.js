#!/usr/bin/env node

import fs from "node:fs/promises";
import jsonc from "comment-json";

const vscodedir = ".vscode";
const settingsFile = vscodedir + "/settings.json";
const settingsText = fs
    .mkdir(vscodedir, { recursive: true })
    .then(() =>
        fs
            .readFile(settingsFile, { encoding: "utf8" })
            .catch(() => "{\n}")
    );

settingsText
    .then(jsonc.parse)
    .then(function (settings) {
        const PROPERTY = "javascript.validate.enable";

        if (settings[PROPERTY] === false) {
            throw "javascript validation already disabled";
        }

        // Disabling javascript validation and comment
        settings[PROPERTY] = false;
        const comment =
            settings[Symbol.for("before:" + PROPERTY)] ??
            [];
        comment.push({
            inline: false,
            type: "LineComment",
            value: " @generated: Required when setting up Flow.js"
        });

        return settingsText
            .then(detectIndent)
            .then(
                jsonc.stringify.bind(jsonc, settings, null)
            );
    })
    .then(fs.writeFile.bind(fs, settingsFile))
    .then(() =>
        console.log("✔ disabled javascript validation")
    )
    .catch(console.log);

function detectIndent(text) {
    const lines = text.split(/\r?\n/);

    let i;
    for (i = 0; i < lines.length; i += 1) {
        const match = lines[i].match(/^(\s+)\S/);
        if (match) {
            return match[1].includes("\t")
                ? "\t"
                : match[1].length;
        }
    }

    // fallback
    return 4;
}