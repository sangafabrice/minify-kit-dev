declare type Extension = ".css" | ".html" | ".js" | ".svg";

/**
 * Extends Promise prototype with a logging helper for
 * {@link ../src/index.js|minify} results.
 * Logs formatted output with the provided file extension tag.
 */
declare function log(this: Promise<string>, extname: Extension): void;

declare interface Promise<string> { log: (typeof log); }