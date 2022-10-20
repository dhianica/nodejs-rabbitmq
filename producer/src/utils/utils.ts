import * as path from 'path';

/**
 * 
 * This is function for convert a string to style CamelCase
 * 
 * @param str string - params want to be convert
 * @returns string - string with camelCase
 */
export const camelCase = (str: string): string =>
    str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
/**
 * 
 * This is function for get last directory from path
 * 
 * @param currentDirectory string - params want to be get a last directory from path
 * @returns string - string name last directory 
 */
export const getLastDirectory = (currentDirectory: string): string =>
    path.basename(path.resolve(currentDirectory));

/**
 * 
 * This is function for check params is empty or not
 * 
 * @param param any - params want to be check
 * @returns boolean - true if param dont have value, default false
 */
export function isEmpty(param: any): boolean {
    if (typeof param === 'object') return Object.keys(param).length < 1;
    else if (Array.isArray(param)) return param.length < 1;
    return false;
}

/**
 * 
 * This is function for get the key from value enum
 * 
 * @param myEnum any - data enum want to be chek
 * @param enumValue number | string - value want to be your get the key 
 * @returns string - key from value you check
 */
export function getEnumKeyByEnumValue(myEnum: any, enumValue: number | string): string {
    let keys = Object.keys(myEnum).filter((x) => myEnum[x] == enumValue);
    return keys.length > 0 ? keys[0] : '';
}

/**
 * 
 * This is function for convert array to be flatten
 * 
 * @param arrs Array - data want to be convert to flatten
 * @returns Array - array with format flatten
 */
export const flatten = <T>(arrs: Array<Array<T>>): Array<T> =>
    ([] as Array<T>).concat(...arrs)

// /**
//  *
//  * This is function for grouping array with specifiec key
//  *  
//  * @param arr Array - data want to be grouping
//  * @param key any - key want to be gropuing example: x => x.name
//  * @returns Array -> array with new format grouping
//  */
export function groupBy<K, V>(array: V[], grouper: (item: V) => K): Map<K, V[]> {
    return array.reduce((store, item) => {
        var key = grouper(item)
        if (!store.has(key)) {
            store.set(key, [item])
        } else {
            store.get(key)?.push(item)
        }
        return store
    }, new Map<K, V[]>())
}

export function transformMap<K, V, R>(
    source: Map<K, V>,
    transformer: (value: V, key: K) => R
) {
    return new Map(
        Array.from(source, v => [v[0], transformer(v[1], v[0])])
    )
}

export function mapToObj<T>(m: Map<string, T>): { [key: string]: T } {
    return Array.from(m).reduce((obj: { [key: string]: T }, [key, value]) => {
        obj[key] = value
        return obj
    }, {})
}

export function mapToArray<K, V, R>(
    m: Map<K, V>,
    transformer: (key: K, item: V) => R
) {
    return Array.from(m.entries()).map(x =>
        transformer(x[0], x[1])
    )
}

/**
 * 
 * This is function for generate data number with range
 * 
 * @param start number - params start number want to be generate
 * @param end number - params end number want to be generate
 * @param step number - params step number row arithmatic want to be 
 * @returns number - array with range
 */
export const range = (start: number, end: number, step: number = 1): Array<number> =>
    [...Array(Math.ceil(end / step)).keys()].map(i => i * step + start)