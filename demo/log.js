/** @flow */

/* jshint ignore:start */
import type { Extension } from "minify-kit";
/* jshint ignore:end */

function log(
    this: Promise<string>,
    extname: Extension
): void {
    const ext = `[${extname}]:`;
    this.then(
        console.log.bind(console, ext.padEnd(8, " "))
    );
}

/* jshint ignore:start */
declare export default class Promise<+R = mixed> {
    then<U = mixed>(
        onFulfill: (value: R) => Promise<U> | U,
        onReject:
            | null
            | void
            | ((error: any) => Promise<U> | U)
    ): Promise<U>;
    log: typeof log;
}
/* jshint ignore:end */

Promise.prototype.log = log;