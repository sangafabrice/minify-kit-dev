/* eslint-disable no-redeclare */
/** @flow */
import type { Extension } from "minify-kit";
import type Promise from "./log.js";

declare function minify(Extension, string): Promise<string>;

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
    /* html */
    `<template>
        <h2>A Great Title</h2>
        <h4>by nobody else than me.</h4>
        <div class="image-container">
            <img src="image.jpg" alt="none">
        </div>
        <button type="submit" class="back">&lt;</button>
        <button type="submit" class="forward">&gt;</button>
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