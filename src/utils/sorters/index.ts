// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sorters: Record<string, (a: any, b: any) => number> = {
  boolean: (a: boolean, b: boolean) => (a === b ? 0 : a ? -1 : 1),
  number: (a: number, b: number) => a - b,
  string: (a: string, b: string) => a.localeCompare(b),
};

/**
 * Ordena um array de objetos com base no valor de uma chave específica.
 *
 * @param array - O array de objetos a ser ordenado.
 * @param key - A chave do objeto pela qual a ordenação será realizada.
 * @param reverse - Se `true`, a ordenação será invertida (padrão: `false`).
 */
export function sortByKey<T>(array: T[], key: keyof T, reverse = false) {
  // Basta transformar 1 em -1 e vice versa para inverter a ordenação
  const reverseOperator = reverse ? -1 : 1;

  const sorter = sorters[typeof key];

  if (!sorter) {
    console.warn(`Sorter não encontrado para o tipo ${typeof key}`);

    return array;
  }

  const sortedArray = array.sort((a, b) => {
    return sorter(a[key], b[key]) * reverseOperator;
  });

  return sortedArray;
}
