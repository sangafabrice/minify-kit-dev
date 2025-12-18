declare module "htmlhint" {
  type ReportType = any;
  type Rule = any;

  type Ruleset = {
    "attr-lowercase": boolean;
    "attr-no-duplication": boolean;
    "attr-no-unnecessary-whitespace": boolean;
    "attr-whitespace": boolean;
    "button-type-require": boolean;
    "tag-pair": boolean;
    "tag-self-close": boolean;
    "tagname-lowercase": boolean;
  };

  type Hint = {
    type: ReportType;
    message: string;
    raw: string;
    evidence: string;
    line: number;
    col: number;
    rule: Rule;
  }

  declare export class HTMLHint {
    static verify(html: string, ruleset?: Ruleset): Hint[];
  }
}