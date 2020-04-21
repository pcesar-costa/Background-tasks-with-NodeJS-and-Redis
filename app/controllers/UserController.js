import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

class UserController {
    async store(req, res) {
        const { name, email } = req.body;
        const user = {
            name,
            email,
            pass: passwordGenerator(32, false)
        };

        await Queue.add('RegistrationMail', { user });

        return res.json(user);
    }
} 
export default new UserController();