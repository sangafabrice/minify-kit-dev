/**
 * Extends Promise prototype with a logging helper for
 * {@link ../src/index.js|minify} results.
 * Logs formatted output with the provided file extension tag.
 * @this {Promise<string>} The promise returned by minify().
 * @param {Extension} extname
 */
function log (extname) {
    this.then(console.log.bind(console, `[${extname}]:`.padEnd(8, " ")));
}

Promise.prototype.log = log;