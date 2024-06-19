export const stringify = (value: any, withSlice?: boolean) => {
  const str = JSON.stringify(value, undefined, 4);
  if (withSlice) return str.slice(1, -1);
  return str;
};

export const isEmptyObject = (value: any) => Object.keys(value).length === 0;

export const isEqual = (a: any, b: any) =>
  JSON.stringify(a) === JSON.stringify(b);

export const removeUndefined = (value: any) =>
  JSON.parse(JSON.stringify(value));
