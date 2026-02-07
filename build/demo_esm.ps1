#!/usr/bin/env pwsh

Set-Location demo/&&
    flow-remove-types index.mjs |
    Out-String |
    node