// import nodemailer from 'nodemailer';
// import mailCredentials from '../config/mail';
// export default nodemailer.createTransport(mailCredentials)

import mailgun from 'mailgun-js';
import mailGunCredentials from '../config/mailgun';
export default mailgun(mailGunCredentials);