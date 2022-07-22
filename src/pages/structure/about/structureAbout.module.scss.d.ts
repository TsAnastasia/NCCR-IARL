declare namespace StructureAboutModuleScssNamespace {
  export interface IStructureAboutModuleScss {
    description: string;
    root: string;
  }
}

declare const StructureAboutModuleScssModule: StructureAboutModuleScssNamespace.IStructureAboutModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StructureAboutModuleScssNamespace.IStructureAboutModuleScss;
};

export = StructureAboutModuleScssModule;
