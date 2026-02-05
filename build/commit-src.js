#!/usr/bin/env node

/*jslint node white*/
import { simpleGit } from "simple-git";

const git = simpleGit("src/");
const message = process.argv.slice(2).join(" ");

git.add("--all").commit(message).then(console.log);