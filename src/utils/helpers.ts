/**
 * Utility functions for the application
 */

/**
 * Formats a number with commas for better readability
 * @param num - The number to format
 * @returns Formatted string with commas
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};

/**
 * Truncates text to a specified length with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Generates a unique ID
 * @returns A unique identifier string
 */
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Delays execution for a specified time
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Safely parses JSON with error handling
 * @param json - JSON string to parse
 * @param fallback - Fallback value if parsing fails
 * @returns Parsed object or fallback value
 */
export const safeJsonParse = <T>(json: string, fallback: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch {
    return fallback;
  }
};

/**
 * Checks if code is running in development mode
 * @returns True if in development mode
 */
export const isDevelopment = (): boolean => {
  return import.meta.env.DEV;
};

/**
 * Checks if code is running in production mode
 * @returns True if in production mode
 */
export const isProduction = (): boolean => {
  return import.meta.env.PROD;
};
