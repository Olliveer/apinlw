import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepositori';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UsersRepository } from '../repositories/UsersRepository';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path';

class SendMailController {

    async execute(req: Request, res: Response) {
        try {
            const { email, survey_id } = req.body;

            const usersRepository = getCustomRepository(UsersRepository);
            const surveysRepository = getCustomRepository(SurveysRepository);
            const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

            const user = await usersRepository.findOne({ email });

            if (!user) {
                return res.status(400).json({ erro: 'User does not exists' });
            }

            const survey = await surveysRepository.findOne({ id: survey_id });

            if (!survey) {
                return res.status(400).json({ erro: 'Survey does not exists' });
            }

            const surveyUser = surveysUsersRepository.create({
                user_id: user.id,
                survey_id
            })

            await surveysUsersRepository.save(surveyUser);

            const npsPath = resolve(__dirname, '..', 'views', 'emails', 'npsMail.hbs');

            const variables = {
                name: user.name,
                title: survey.title,
                description: survey.description
            }

            await SendMailService.execute(email, survey.title, variables, npsPath);

            res.status(201).json({ ...surveyUser });
        } catch (error) {
            return res.status(400).json({ erro: error });
        }
    }

}

export { SendMailController };