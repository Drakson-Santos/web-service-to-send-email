import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import { MAILTRAP } from '../../../secrets';

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: MAILTRAP.TYPE_SERVICE,
            host: MAILTRAP.HOST,
            port: MAILTRAP.PORT,
            auth: {
                user: MAILTRAP.USER,
                pass: MAILTRAP.PASS
            }
        })
    }

    async sendEmail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.address,
            },
            from: {
                name: message.from.name,
                address: message.from.address,
            },
            subject: message.subject,
            html: message.body,
        });
    }
}