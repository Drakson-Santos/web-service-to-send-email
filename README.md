# API for sending emails

## Development

To run the application

First Tab:
Run in the terminal:
```sh
npm install
```

Second Tab:
In the file /secrets.ts define your SMTP data.
> Note: If you want to use your gmail as SMTP server, make the necessary settings in your account: https://kb.synology.com/en-global/SRM/tutorial/How_to_use_Gmail_SMTP_server_to_send_emails_for_SRM

```sh
MAILTRAP = {
    TYPE_SERVICE: GMAIL OR EMPTY,
    HOST: 'smtp.mailtrap.io',
    PORT: YOUR SMTP SERVER PORT (Gmail use port 587),
    USER: YOUR EMAIL SMTP OU GMAIL,
    PASS: YOUR PASSWORD SMTP OU GMAIL,
    FROM: {
        NAME: 'yourname',
        ADDRESS: 'youremail@gmail.com'
    }
}
```

Third tab:
Run in the terminal:
```sh
npm start
```
#### API

For use api:
Send request by POST method for url:

```sh
localhost:8080/v1/email
```
Json data:
```sh
{
	"name": "Word",
	"address": "Email sent",
	"subject": "Sended for api",
	"body": "<strong>HELLO</strong>"
}
```

