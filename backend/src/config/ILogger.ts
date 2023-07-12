/**
 * Interface for a logger.
 * @interface
 */
export interface ILogger {
  /**
   * Logs an informational message with optional additional metadata.
   * @param {string} message - The message to log.
   * @param {...any[]} meta - Additional metadata to include in the log.
   * @returns {void}
   */
  info(message: string, ...meta: any[]): void;

  /**
   * Logs an informational message.
   * @param {string} message - The message to log.
   * @returns {void}
   */
  info(message: string): void;

  /**
   * Logs an error message with optional additional metadata.
   * @param {string} message - The error message to log.
   * @param {...any[]} meta - Additional metadata to include in the log.
   * @returns {void}
   */
  error(message: string, ...meta: any[]): void;
}