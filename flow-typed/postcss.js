declare namespace postcss {
  type AcceptedPlugin = any;
}

declare module "postcss" {
  type RootNode = any;

  declare class Result<T> {
    root: T;
    get css(): string;
  }

  declare class LazyResult {
    async(): Promise<Result<RootNode>>
  }

  declare export class Processor {
    process(css: string): LazyResult
  }

  declare export default function postCSS(...plugins: postcss.AcceptedPlugin[]): Processor
}