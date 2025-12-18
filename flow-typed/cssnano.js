declare module "cssnano" {
  import { Processor } from "postcss";

  type Options = {
    preset?: any;
    plugins?: any[];
    configFile?: string;
  };

  declare export default function cssnanoPlugin(options?: Options): Processor;
}