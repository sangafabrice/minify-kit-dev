#!/usr/bin/env node

import { simpleGit } from "simple-git";

const git = simpleGit();

console.log("%j", await git.push([
    "--all",
    "--recurse-submodules=on-demand"
]));