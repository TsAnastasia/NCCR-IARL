declare namespace HomePageCardModuleScssNamespace {
  export interface IHomePageCardModuleScss {
    description: string;
    root: string;
    title: string;
  }
}

declare const HomePageCardModuleScssModule: HomePageCardModuleScssNamespace.IHomePageCardModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomePageCardModuleScssNamespace.IHomePageCardModuleScss;
};

export = HomePageCardModuleScssModule;
