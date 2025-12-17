declare module "minify-kit-dev" {
  declare export default function minify(extname: Extension, content: string): Promise<string>;
}