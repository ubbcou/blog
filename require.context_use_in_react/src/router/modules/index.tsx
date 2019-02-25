/**
 * @file
 * 使用 require.context 方法
 */

/// require.context(directory, useSubdirectories = false, regExp = /^\.\//);
/// webpack require.context()在构建时解析代码。
import { CreateRouteProps } from "../../router/createRoute";

function concatModulesRoutes(): CreateRouteProps[] {
  const files = (require as any).context(".", false, /\.(js|jsx|tsx)$/);
  let myArray: any[] = [];

  files.keys().map((filepath: string) => {
    if (/(index\.(tsx|js|jsx))$/.test(filepath)) {
      return;
    }
    myArray = myArray.concat(files(filepath).default);
  });

  return myArray;
}

const routes = concatModulesRoutes()

export default routes;
