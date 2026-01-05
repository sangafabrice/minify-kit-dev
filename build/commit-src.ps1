#!/usr/bin/env pwsh

git -C src/ add --all
git -C src/ commit --message "$args"