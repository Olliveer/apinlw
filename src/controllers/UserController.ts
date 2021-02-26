import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import * as Yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController {
    async create(req: Request, res: Response) {
        try {
        const { name, email } = req.body;

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required()
        })

        // if (!(await schema.isValid(req.body))) {
        //     return res.status(400).json({error: 'Validation fail'})
        // }

        // schema.validate(req.body, { abortEarly: false })
        // .catch((err) => {
        //     return res.json({error: err.errors});
        // })

        try {
            await schema.validate(req.body, { abortEarly: false });
        } catch (err) {
            throw new AppError(err.errors );
        }

        const usersRepository = getCustomRepository(UsersRepository);

        const userExists = await usersRepository.findOne({ email });
        
        if (userExists) {
            throw new AppError('user already exists');
        }

        const user = usersRepository.create({ name, email });

        await usersRepository.save(user);

        res.status(201).json({ ...user, message: 'user registred' })

        } catch (error) {
            if (error) {
                throw new AppError(error);
            }
        }

    }
}

export default UserController;