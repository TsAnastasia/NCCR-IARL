declare namespace StructureSchemeItemModuleScssNamespace {
  export interface IStructureSchemeItemModuleScss {
    active: string;
    children: string;
    gitIngnore: string;
    head: string;
    icon: string;
    name: string;
    necessary: string;
    open: string;
    pattern: string;
    root: string;
  }
}

declare const StructureSchemeItemModuleScssModule: StructureSchemeItemModuleScssNamespace.IStructureSchemeItemModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructureSchemeItemModuleScssNamespace.IStructureSchemeItemModuleScss;
};

export = StructureSchemeItemModuleScssModule;
