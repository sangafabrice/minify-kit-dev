declare type Extension = ".css" | ".html" | ".js" | ".svg";

declare type LoggedPromise = Promise<string> & { log: (typeof log) };