#!/usr/bin/env pwsh

Set-Location demo/&&
    flow-remove-types index.js |
    Out-String |
    node