import { Request, Response } from "express";
import { SendEmailUseCase } from "./SendEmailUseCase";

export class SendEmailController {
    constructor(
        private sendEmailUseCase: SendEmailUseCase,
    ) {}

    async execute(request: Request, response: Response): Promise<Response> {
        const { name, address, subject = '', body = '' } = request.body
        try {
            await this.sendEmailUseCase.execute({
                name,
                address,
                subject,
                body
            })

            return response.status(200).send()
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}