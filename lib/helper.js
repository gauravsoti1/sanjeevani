export function isEmptyObject(obj) {
  if (!obj) return true;
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}
