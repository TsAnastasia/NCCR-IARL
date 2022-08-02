declare namespace HeaderModuleScssNamespace {
  export interface IHeaderModuleScss {
    active: string;
    image: string;
    item: string;
    links: string;
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
