export default {
  esm: 'babel',
  cjs: 'babel',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  pkgs: ['lerna-package-sqy-1', 'lerna-package-sqy-2'],
};
