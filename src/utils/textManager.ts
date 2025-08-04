import texts from '../content/texts.json';

type TextContent = typeof texts;

/**
 * Get text content by dot-notation path (e.g., 'hero.title', 'contact.email')
 * Returns the text if found, otherwise returns the fallback or key path
 */
export function getText(path: string, fallback?: string): string {
  const keys = path.split('.');
  let current: unknown = texts;

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      // Key not found, return fallback or path for debugging
      return fallback || `[Missing: ${path}]`;
    }
  }

  if (typeof current === 'string') {
    return current;
  }

  // Path doesn't point to a string value
  return fallback || `[Invalid path: ${path}]`;
}

/**
 * Get all available text keys for debugging/development
 */
export function getAllTextKeys(): string[] {
  const keys: string[] = [];
  
  function traverse(obj: unknown, prefix = ''): void {
    if (obj && typeof obj === 'object') {
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof value === 'string') {
          keys.push(fullKey);
        } else {
          traverse(value, fullKey);
        }
      }
    }
  }
  
  traverse(texts);
  return keys;
}