#!/usr/bin/env pwsh

$pattern = "[\\/](?<rootchild>[^\\/]+)([\\/].*)?"
$replacement = '${rootchild}'

flow ls 2> $null |
ForEach-Object {
    $_.Replace($PWD, "") -replace $pattern,$replacement
} |
Select-Object -Unique |
ForEach-Object {
    $flowvisible = "<PROJECT_ROOT>/$_"
    if (Test-Path $_ -PathType Container) {
        return "$flowvisible/"
    }
    $flowvisible
}