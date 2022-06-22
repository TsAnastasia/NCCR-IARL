declare namespace StructureSchemeModuleScssNamespace {
  export interface IStructureSchemeModuleScss {
    root: string;
  }
}

declare const StructureSchemeModuleScssModule: StructureSchemeModuleScssNamespace.IStructureSchemeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructureSchemeModuleScssNamespace.IStructureSchemeModuleScss;
};

export = StructureSchemeModuleScssModule;
