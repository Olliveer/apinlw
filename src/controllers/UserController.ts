import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
    async create(req: Request, res: Response) {
        try {
            const { name, email } = req.body;

            const usersRepository = getCustomRepository(UsersRepository);

            const userExists = await usersRepository.findOne({ email });
            console.log(userExists);
            if (userExists) {
                return res.status(400).json({ error: 'user already exists' });
            }

            const user = usersRepository.create({ name, email });

            await usersRepository.save(user);

            res.status(200).json({ ...user, message: 'user registred' })

        } catch (error) {
            if (error) {
                res.status(400).send('error on create user');
            }
        }

    }
}

export default UserController;