function toCamelCase(str: string) {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}

function transformKeysToCamelCase<T extends Record<string, any>>(obj: T): any {
  if (Array.isArray(obj)) {
    return obj.map(transformKeysToCamelCase);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const camelKey = toCamelCase(key);
      acc[camelKey] = transformKeysToCamelCase(value);
      return acc;
    }, {} as any);
  }
  return obj;
}

export default transformKeysToCamelCase;
