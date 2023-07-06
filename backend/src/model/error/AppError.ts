export class AppError extends Error {
  code: number;
  message: string;
  errorStack: any[];

  constructor(code: number, message: string, errorStack?: any[]) {
    super(message);
    this.code = code;
    this.message = message;
    if (errorStack) {
      this.errorStack = errorStack;
    } else {
      this.errorStack = []
    }
  }
}