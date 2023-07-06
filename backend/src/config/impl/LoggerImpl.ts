import {config} from "../config";
import {injectable} from "inversify";
import winston, {Logger as WinstonLogger} from "winston";
import {ILogger} from "../ILogger";


@injectable()
export class LoggerImpl implements ILogger {
  private logger: WinstonLogger;

  error(message: string, ...meta: any[]): void {
    this.logger.error(message, meta);
  }

  info(message: string, ...meta: any[]): void;
  info(message: string): void;
  info(message: string, ...meta: any[]): void {
    if (meta) {
      this.logger.info(message, meta);
    } else {
      this.logger.info(message);
    }
  }

  constructor() {
    this.logger = winston.createLogger({
      level: config.logger.level,
      format: winston.format.combine(
          winston.format.metadata(
              {fillExcept: ['message', 'level', 'timestamp']}),
          winston.format.printf(info => {
            const {level, message, timestamp, metadata} = info;
            const className = metadata && metadata.className
                ? metadata.className
                : '';
            return `${timestamp} [${level.toUpperCase()}] [${className}]: ${message}`;
          })
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs.log'})
      ]
    });
  }

}