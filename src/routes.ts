import { Router } from "express";
import { sendEmailController } from "./useCases/SendEmail/v1";

const router = Router()

router.post('/v1/email', (request, response) => {
    return sendEmailController.execute(request, response)
})

export { router }
