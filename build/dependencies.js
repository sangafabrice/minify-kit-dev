#!/usr/bin/env node

import ncu from "npm-check-updates";

const upgraded = await ncu.run({
    upgrade: true,
    install: "always"
});

console.log(upgraded);