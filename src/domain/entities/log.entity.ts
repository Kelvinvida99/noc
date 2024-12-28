export enum LogServerityLevel {
  low = "low",
  medium = "medium",
  higt = "high",
}

export class LogEntity {
  public level: LogServerityLevel;
  public message: string;
  public createAt: Date;

  constructor(message: string, level: LogServerityLevel) {
    this.level = level;
    this.message = message;
    this.createAt = new Date();
  }

  static fromJson = ( json: string ): LogEntity => {
    const { message, level, createAt } = JSON.parse(json);

    const log = new LogEntity(message, level);
    log.createAt = new Date(createAt)

    return log;
  }
}
