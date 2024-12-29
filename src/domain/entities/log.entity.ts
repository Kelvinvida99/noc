export enum LogServerityLevel {
  low = "low",
  medium = "medium",
  higt = "high",
}

export interface LogEntityOptions {
  level: LogServerityLevel;
  message: string;
  createAt: Date;
  origin: string;
}

export class LogEntity {
  public level: LogServerityLevel;
  public message: string;
  public origin: string;
  public createAt?: Date;

  constructor(options: LogEntityOptions) {
    this.level = options.level;
    this.message = options.message;
    this.createAt = options.createAt;
    this.origin = options.origin;
  }

  static fromJson = (json: string): LogEntity => {
    const { message, level, createAt, origin } = JSON.parse(json);

    const log = new LogEntity({
      message,
      level,
      createAt,
      origin,
    });

    return log;
  };
}
