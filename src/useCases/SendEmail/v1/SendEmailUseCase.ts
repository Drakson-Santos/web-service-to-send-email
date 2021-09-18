import { MAILTRAP } from "../../../../secrets";
import { IMailProvider } from "../../../providers/IMailProvider";
import { ISendEmailRequestDTO } from "./SendEmailDTO";

export class SendEmailUseCase {
    constructor(
        private mailProvider: IMailProvider,
    ) {}

    async execute(data: ISendEmailRequestDTO) {
        await this.mailProvider.sendEmail({
            to: {
                name: data.name,
                address: data.address,
            },
            from: {
                name: MAILTRAP.FROM.NAME,
                address: MAILTRAP.FROM.ADDRESS,
            },
            subject: data.subject,
            body:  data.body,
        })
    }
}