/** @flow */
/*jslint node*/
/*jslint-disable*/
import type { Extension } from "minify-kit";
import type Promise from "./log.js";

declare function minify(Extension, string): Promise<string>;
/*jslint-enable*/

["flow-remove-types/register", "./log"].forEach(require);

// $FlowExpectedError[name-already-bound]
const minify = require("minify-kit").default;

minify(
    ".css",
    `svg {
        align-self: center;
        justify-self: center;
        transition: width 1s ease;
        width: var(--play-control-size, 4.25rem);
    }`
).log(".css");

minify(
    ".html",
    `<template>
        <style></style>
        <div id="host">
            <div id="icon">
                <slot></slot>
            </div>
        </div>
    </template>`
).log(".html");

minify(
    ".js",
    `const greeting = { normal: "Hello World!" };
    console.log(greeting.normal);`
).log(".js");

minify(
    ".svg",
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" role="img">
        <title lang="en">Unmute</title>
        <rect width="100%" height="100%" fill="transparent"/>
    </svg>`
).log(".svg");