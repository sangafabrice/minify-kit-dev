declare type Extension = ".css" | ".html" | ".js" | ".svg";

// $FlowExpectedError[libdef-override]
declare class Promise<+R = mixed> {
    // #region core definition
    constructor(callback: (resolve: (result: Promise<R> | R) => void, reject: (error: any) => void) => mixed): void;
    then<U = empty>(onFulfill: null | void, onReject: null | void | ((error: any) => Promise<U> | U)): Promise<R | U>;
    then<U = mixed>(onFulfill: (value: R) => Promise<U> | U, onReject: null | void | ((error: any) => Promise<U> | U)): Promise<U>;
    catch<U = empty>(onReject: null | void | ((error: any) => Promise<U> | U)): Promise<R | U>;
    finally(onFinally: () => mixed): Promise<R>;
    static resolve<T = mixed>(object: Promise<T> | T): Promise<T>;
    static reject<T = mixed>(error: any): Promise<T>;
    static all<T: Iterable<mixed>>(promises: T): Promise<T extends $ReadOnlyArray<mixed> ? {[K in keyof T]: Awaited<T[K]>} : T extends Iterable<infer V> ? Array<Awaited<V>> : any>;
    static allSettled<T: Iterable<mixed>>(promises: T): Promise<T extends $ReadOnlyArray<mixed> ? {[K in keyof T]: $SettledPromiseResult<Awaited<T[K]>>} : T extends Iterable<infer V> ? Array<$SettledPromiseResult<Awaited<V>>> : any>;
    static race<T, Elem: Promise<T> | T>(promises: Iterable<Elem>): Promise<T>;
    static any<T, Elem: Promise<T> | T>(promises: Iterable<Elem>): Promise<T>;
    // #endregion
    /**
     * Extends Promise prototype with a logging helper for
     * {@link ../src/index.js|minify} results.
     * Logs formatted output with the provided file extension tag.
     */
    log(Extension): void;
}