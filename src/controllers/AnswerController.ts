import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
    async execute(req: Request, res: Response) {
        try {
            const { value } = req.params;
            const { u } = req.query;

            const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

            const surveyUser = await surveysUsersRepository.findOne(String(u));

            if (!surveyUser) {
                return res.status(400).json({ error: 'Survey User does not exists!' })
            }

            surveyUser.value = Number(value);

            await surveysUsersRepository.save(surveyUser);
            return res.status(200).json(surveyUser);
        } catch (error) {
            if (error) {
                return res.status(400).json(error);
            }
        }
    }
}

export { AnswerController };