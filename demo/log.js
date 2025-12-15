/** @flow */
// $FlowExpectedError[missing-this-annot]
// $FlowExpectedError[missing-local-annot]
function log (extname) {
    this.then(console.log.bind(console, `[${extname}]:`.padEnd(8, " ")));
}

// $FlowExpectedError[cannot-resolve-name]
Promise.prototype.log = log;