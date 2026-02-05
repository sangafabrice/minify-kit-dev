/** @flow */

/*jslint node white this long*/
/*jslint-disable*/
import type { Extension } from "minify-kit";
/*jslint-enable*/

function log (/*:: this: Promise<string>, */ extname/* : Extension */)/* : void */ {
    const ext = `[${extname}]:`;
    this.then(console.log.bind(console, ext.padEnd(8, " ")));
}

/*jslint-disable*/
declare export default class Promise<+R = mixed> {
    then<U = mixed>(
      onFulfill: (value: R) => Promise<U> | U,
      onReject: null | void | ((error: any) => Promise<U> | U)
    ): Promise<U>;
    log: (typeof log);
}
/*jslint-enable*/

Promise.prototype.log = log;