declare namespace GitPageModuleScssNamespace {
  export interface IGitPageModuleScss {
    root: string;
  }
}

declare const GitPageModuleScssModule: GitPageModuleScssNamespace.IGitPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: GitPageModuleScssNamespace.IGitPageModuleScss;
};

export = GitPageModuleScssModule;
