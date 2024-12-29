import { LogEntity, LogServerityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";
interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async execute(url: string): Promise<boolean> {
    const origin = "check-service.ts";
    const createAt = new Date();
    try {
      const req = await fetch(url);
      if (!req.ok) throw new Error(`Error on check server ${url}`);

      const log = new LogEntity({
        message: `Server ${url} working`,
        level: LogServerityLevel.low,
        createAt,
        origin,
      });
      this.logRepository.saveLog(log);
      this.successCallback();
      return true;
    } catch (error) {
      const errorMessage = `${url} is not ok. ${error}`;
      const log = new LogEntity({
        message: errorMessage,
        level: LogServerityLevel.higt,
        createAt,
        origin,
      });
      this.logRepository.saveLog(log);
      this.errorCallback(`${error}`);

      return false;
    }
  }
}
