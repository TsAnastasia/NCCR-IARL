declare namespace GitNavModuleScssNamespace {
  export interface IGitNavModuleScss {
    link: string;
    nav: string;
    root: string;
    title: string;
  }
}

declare const GitNavModuleScssModule: GitNavModuleScssNamespace.IGitNavModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GitNavModuleScssNamespace.IGitNavModuleScss;
};

export = GitNavModuleScssModule;
