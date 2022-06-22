declare namespace StructureInfoModuleScssNamespace {
  export interface IStructureInfoModuleScss {
    close: string;
    empty: string;
    optional: string;
    pattern: string;
    root: string;
    subtitle: string;
    text: string;
    title: string;
  }
}

declare const StructureInfoModuleScssModule: StructureInfoModuleScssNamespace.IStructureInfoModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructureInfoModuleScssNamespace.IStructureInfoModuleScss;
};

export = StructureInfoModuleScssModule;
