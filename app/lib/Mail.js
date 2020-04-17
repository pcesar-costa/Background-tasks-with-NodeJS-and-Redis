import nodemailer from 'nodemailer';
import mailCredentials from '../config/mail';

export default nodemailer.createTransport(mailCredentials)