/**
 * Wrapper around `localstorage.setItem`, will throw any error that occurs
 * @param key The localstorage key
 * @param item Any item that will be turned into json
 * @returns An object with one property `error`, if an error occured otherwise nothing
 */
export function save(key: string, item: any): any {
  try {
    const json = JSON.stringify(item);
    localStorage.setItem(key, json);
    return {};
  } catch (error) {
    return { error };
  }
}

/**
 * Wrapper around `localstorage.getItem`, will throw any error that occurs
 * @param key The localstorage key
 * @returns An object with `error` and `item` as its properties: `{error, item}`,
 *  error will be defined if one occured
 */
export function load(key: string): any {
  try {
    const itemJson = localStorage.getItem(key);

    if (!itemJson) return { item: null };

    return { item: JSON.parse(itemJson) };
  } catch (error) {
    return { error };
  }
}

export default { load, save };
