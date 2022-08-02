declare namespace ExternalLinkModuleScssNamespace {
  export interface IExternalLinkModuleScss {
    link: string;
  }
}

declare const ExternalLinkModuleScssModule: ExternalLinkModuleScssNamespace.IExternalLinkModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ExternalLinkModuleScssNamespace.IExternalLinkModuleScss;
};

export = ExternalLinkModuleScssModule;
