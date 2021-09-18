export const SERVER_PORT = 8080

/**
 * TYPE_SERVICE = 'gmail' or '' 
 */
export const MAILTRAP = {
    TYPE_SERVICE: 'gmail',
    HOST: 'smtp.mailtrap.io',
    PORT: 587,
    USER: 'DEFAULT',
    PASS: 'DEFAULT',
    FROM: {
        NAME: 'Web Service to send email',
        ADDRESS: 'default@gmail.com'
    }
}
