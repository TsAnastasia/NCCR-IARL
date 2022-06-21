declare namespace StructureSchemeItemModuleScssNamespace {
  export interface IStructureSchemeItemModuleScss {
    children: string;
  }
}

declare const StructureSchemeItemModuleScssModule: StructureSchemeItemModuleScssNamespace.IStructureSchemeItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructureSchemeItemModuleScssNamespace.IStructureSchemeItemModuleScss;
};

export = StructureSchemeItemModuleScssModule;
