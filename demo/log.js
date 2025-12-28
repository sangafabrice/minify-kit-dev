/** @flow */
import type { Extension } from "minify-kit";

function log (this: Promise<string>, extname: Extension): void {
    this.then(console.log.bind(console, `[${extname}]:`.padEnd(8, " ")));
}

declare export default class Promise<+R = mixed> {
    then<U = mixed>(
      onFulfill: (value: R) => Promise<U> | U,
      onReject: null | void | ((error: any) => Promise<U> | U)
    ): Promise<U>;
    log: (typeof log);
}

Promise.prototype.log = log;