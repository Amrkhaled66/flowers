function toSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

function transformKeysToSnakeCase<T extends Record<string, any>>(obj: T): any {
  if (Array.isArray(obj)) {
    return obj.map(transformKeysToSnakeCase);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const snakeKey = toSnakeCase(key);
      acc[snakeKey] = transformKeysToSnakeCase(value);
      return acc;
    }, {} as any);
  }
  return obj;
}


export default transformKeysToSnakeCase