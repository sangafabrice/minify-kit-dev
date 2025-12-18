declare module "svgo" {
  type PluginConfig = any;

  type Config = {
    path?: string;
    multipass?: boolean;
    floatPrecision?: number;
    plugins?: PluginConfig[];
    js2svg?: {
      doctypeStart?: string;
      doctypeEnd?: string;
      procInstStart?: string;
      procInstEnd?: string;
      tagOpenStart?: string;
      tagOpenEnd?: string;
      tagCloseStart?: string;
      tagCloseEnd?: string;
      tagShortStart?: string;
      tagShortEnd?: string;
      attrStart?: string;
      attrEnd?: string;
      commentStart?: string;
      commentEnd?: string;
      cdataStart?: string;
      cdataEnd?: string;
      textStart?: string;
      textEnd?: string;
      indent?: number | string;
      regEntities?: RegExp;
      regValEntities?: RegExp;
      encodeEntity?: (char: string) => string;
      pretty?: boolean;
      useShortTags?: boolean;
      eol?: 'lf' | 'crlf';
      finalNewline?: boolean;
    };
    datauri?: "base64" | "enc" | "unenc";
  };

  type Output = { data: string };

  declare export function optimize(input: string, config: Config): Output;
}