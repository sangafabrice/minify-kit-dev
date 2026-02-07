#!/usr/bin/env node

import ncu from "npm-check-updates";

ncu.run({
    install: "always",
    reject: "prettier",
    upgrade: true,
    workspaces: true
}).then(console.log);