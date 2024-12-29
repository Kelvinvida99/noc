import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasourcers/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.server";


const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
)

export class Server {
  public static start() {
    console.log("Server started...");

    /* const emailService = new EmailService();
    emailService.sendEmail({
      to: 'kelvinvida99@gmail.com',
      subject: 'logs',
      htmlBody: `
        <h3>Logs Del sistema</h3>
      `
    }) */

    CronService.createJob(
      "*/5 * * * * *",
      () => {
        const url = "https://www.google.com/"

        //new CheckService().execute('https://www.google.com/')
        new CheckService(
          fileSystemLogRepository,
          () => console.log(`${url} is ok`),
          (error) => console.log(error)
        ).execute(url)
      }
    )
  }
}
