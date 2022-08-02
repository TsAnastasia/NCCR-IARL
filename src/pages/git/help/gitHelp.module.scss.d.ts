declare namespace GitHelpModuleScssNamespace {
  export interface IGitHelpModuleScss {
    command: string;
    commands: string;
    item: string;
  }
}

declare const GitHelpModuleScssModule: GitHelpModuleScssNamespace.IGitHelpModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GitHelpModuleScssNamespace.IGitHelpModuleScss;
};

export = GitHelpModuleScssModule;
