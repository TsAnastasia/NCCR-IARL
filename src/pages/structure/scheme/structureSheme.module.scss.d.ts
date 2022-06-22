declare namespace StructureShemeModuleScssNamespace {
  export interface IStructureShemeModuleScss {
    root: string;
  }
}

declare const StructureShemeModuleScssModule: StructureShemeModuleScssNamespace.IStructureShemeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructureShemeModuleScssNamespace.IStructureShemeModuleScss;
};

export = StructureShemeModuleScssModule;
