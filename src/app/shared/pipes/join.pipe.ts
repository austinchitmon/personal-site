import { Pipe, PipeTransform } from '@angular/core';

/**
 * JoinPipe transforms an array of strings into a single concatenated string
 * with a customizable separator.
 * 
 * @example
 * // Basic usage with default separator
 * {{ stringArray | join }}
 * 
 * @example  
 * // Custom separator
 * {{ stringArray | join:' | ' }}
 * 
 * @example
 * // Handling edge cases
 * {{ nullableArray | join }}
 */
@Pipe({
  name: 'join',
  standalone: true,
  pure: true
})
export class JoinPipe implements PipeTransform {
  
  /**
   * Transforms an array of strings into a concatenated string with separator.
   * 
   * @param value - Array of strings to join, or null/undefined
   * @param separator - Optional separator string (default: ', ')
   * @returns Joined string or null for invalid inputs
   */
  transform(value: string[] | null | undefined, separator: string = ', '): string | null {
    // Handle null and undefined inputs
    if (value == null) {
      return null;
    }

    // Ensure input is an array
    if (!Array.isArray(value)) {
      return null;
    }

    // Filter out non-string values for type safety
    const stringValues = value.filter((item): item is string => typeof item === 'string');
    
    // Join the filtered string array
    return stringValues.join(separator);
  }
}