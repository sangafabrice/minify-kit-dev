declare type Extension = ".css" | ".html" | ".js" | ".svg";

/**
 * Extends Promise prototype with a logging helper for
 * {@link ../src/index.js|minify} results.
 * Logs formatted output with the provided file extension tag.
 */
declare function log<T>(this: Promise<T>, extname: Extension): void;

declare interface Promise<T> { log: (typeof log<T>); }