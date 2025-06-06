/**
 * 非同期のイテレーターを持つインスタンスか判定する
 * @param value
 * @returns
 */
export default function isAsyncIterable(
  value: unknown,
): value is AsyncIterable<unknown> {
  return value != null && typeof value[Symbol.asyncIterator] === 'function';
}
