declare module "html-minifier-terser" {
  declare export function minify(value: string, options?: { collapseWhitespace?: boolean }): Promise<string>;
}