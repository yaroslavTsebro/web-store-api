export interface ILogger {
  info(message: string, ...meta: any[]): void;

  info(message: string): void;

  error(message: string, ...meta: any[]): void;
}