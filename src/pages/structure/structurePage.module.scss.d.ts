declare namespace StructurePageModuleScssNamespace {
  export interface IStructurePageModuleScss {
    root: string;
    title: string;
  }
}

declare const StructurePageModuleScssModule: StructurePageModuleScssNamespace.IStructurePageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructurePageModuleScssNamespace.IStructurePageModuleScss;
};

export = StructurePageModuleScssModule;
