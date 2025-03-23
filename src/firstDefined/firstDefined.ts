/**
 * 渡された引数からundefinedでないもののうち最も左側にある値を返す
 * @param args
 */
export default function firstDefined<V = any>(...args: V[]): V | undefined {
  for (const arg of args) {
    if (arg !== undefined) {
      return arg;
    }
  }
  return;
}
