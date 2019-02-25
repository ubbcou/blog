/**
 * @file
 * 导出 layouts 组件。
 * 使用 require.context 方法
 */

/// require.context(directory, useSubdirectories = false, regExp = /^\.\//);
/// webpack require.context()在构建时解析代码。
const files = (require as any).context('.', false, /\.(js|jsx|tsx)$/);
const layoutsComponents: any = {};

files.keys().map((filepath: string) => {
  if ((/(index\.(tsx|js|jsx))$/).test(filepath)) {
    return;
  }
  layoutsComponents[files(filepath).default.name] = files(filepath).default;
});

export default layoutsComponents;