#!/usr/bin/env pwsh

@(
    '.'
    @(
        $dirargs = @{
            Directory = $true
            Name = $true
            Exclude = 'node_modules','.vscode','flow-typed'
        }
        Get-ChildItem @dirargs -PipelineVariable p |
        ForEach-Object {
            $p
            (
                Get-ChildItem $p -Directory -Name -Recurse |
                ForEach-Object { "$p/$_" }
            )
        }
    )
) |
ForEach-Object {
    node node_modules/@jslint-org/jslint/jslint.mjs $_/.
}