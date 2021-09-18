import { MailTrapMailProvider } from "../../../providers/implementations/MailTrapMailProvider";
import { SendEmailController } from "./SendEmailController";
import { SendEmailUseCase } from "./SendEmailUseCase";

const mailTrapMailProvider = new MailTrapMailProvider()

const sendEmailUseCase = new SendEmailUseCase(
    mailTrapMailProvider
)

const sendEmailController = new SendEmailController(
    sendEmailUseCase
)

export { sendEmailUseCase, sendEmailController}