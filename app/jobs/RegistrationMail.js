import mg from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({data}) {
        const { user } = data;

        const link = 'http://localhost:3000/app/cadastro/mail/teste';
        const recipientVars = `{ "${user.email}": {"_name": "${user.name}", "confirmlink": "${link}" }}`;
        
        const mail = {
            from: 'Stock Dashboard <no-reply@bybull.tech>',
            to: 'pcesar_costa@hotmail.com',
            subject: 'Bem vindo! Confirme seu e-mail',
            template: 'confirmacao-email',
            'recipient-variables': recipientVars,
        };

        await mg.messages().send(mail).catch(err => {
            throw new Error(err);
        });
    }
}

// use it if you want to use nodemailer
//await Mail.sendMail({
//    from: "Pedro Costa <pcesar_costa@hotmail.com>",
//    to: `${user.name} <${user.email}>`,
//    subject: "Cadastro de usuário",
//    html: `Olá, ${user.name}, bem-vindo.`
//});