#!/usr/bin/env node

/*jslint node*/
import ncu from "npm-check-updates";

ncu.run({
    install: "always",
    upgrade: true,
    workspaces: true
}).then(console.log);