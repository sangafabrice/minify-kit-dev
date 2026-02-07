#!/usr/bin/env node
import flowRemoveTypes from "flow-remove-types";
import { readFile } from "node:fs/promises";

function getDataUri(code) {
    return (
        "data:text/javascript;charset=utf-8," +
        encodeURIComponent(code)
    );
}

process.chdir("demo");

readFile("index.mjs", "utf8")
    .then(flowRemoveTypes)
    .then(getDataUri)
    .then(url => import(url));