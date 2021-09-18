import { app } from "./app"
import { SERVER_PORT } from '../secrets'

app.listen(SERVER_PORT)
console.log('Server is runing in port:', SERVER_PORT)
