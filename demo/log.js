function log (extname) {
    this.then(console.log.bind(console, `[${extname}]:`.padEnd(8, " ")));
}

Promise.prototype.log = log;