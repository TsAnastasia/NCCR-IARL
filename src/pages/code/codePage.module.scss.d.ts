declare namespace CodePageModuleScssNamespace {
  export interface ICodePageModuleScss {
    item: string;
    rules: string;
  }
}

declare const CodePageModuleScssModule: CodePageModuleScssNamespace.ICodePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CodePageModuleScssNamespace.ICodePageModuleScss;
};

export = CodePageModuleScssModule;
