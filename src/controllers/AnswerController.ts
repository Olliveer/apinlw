import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {
    async execute(req: Request, res: Response) {
        try {
            const { value } = req.params;
            const { u } = req.query;

            const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

            const surveyUser = await surveysUsersRepository.findOne(String(u));

            if (!surveyUser) {
                throw new AppError('Survey User does not exists!');
            }

            surveyUser.value = Number(value);

            await surveysUsersRepository.save(surveyUser);
            return res.status(200).json(surveyUser);
        } catch (error) {
            if (error) {
                throw new AppError(error);
            }
        }
    }
}

export { AnswerController };