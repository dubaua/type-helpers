/**
 * Extracts the union of all value types from a record-like type.
 */
export type ExtractTypeMapUnion<T extends Record<PropertyKey, unknown>> = T[keyof T];

/**
 * Extracts the union of all value types from a readonly literal map.
 */
export type ExtractLiteralMapUnionType<T extends { readonly [K in keyof T]: T[K] }> = T[keyof T];

/**
 * Extracts the element union from a readonly tuple or array type.
 */
export type ExtractArrayUnionType<T extends readonly unknown[]> = T[number];
