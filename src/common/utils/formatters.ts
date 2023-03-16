export function cleanStringWithNumberVal(val: string) {
  if (val === undefined) return '';
  return `${Number(val)}`
    .replace(/[- ]/g, '')
    .replace(/\,/g, '.')
    .replace(/^([^\.]*\.)|\./g, '$1');
}
