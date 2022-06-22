declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    link: string;
    logo: string;
    name: string;
    root: string;
  }
}

declare const HeaderModuleScssModule: HeaderModuleScssNamespace.IHeaderModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderModuleScssNamespace.IHeaderModuleScss;
};

export = HeaderModuleScssModule;
