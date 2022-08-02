declare namespace GitRulesModuleScssNamespace {
  export interface IGitRulesModuleScss {
    text: string;
  }
}

declare const GitRulesModuleScssModule: GitRulesModuleScssNamespace.IGitRulesModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GitRulesModuleScssNamespace.IGitRulesModuleScss;
};

export = GitRulesModuleScssModule;
