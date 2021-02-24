import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepositori";

class SurveysController {
    async create(req: Request, res: Response) {
        try {
            const { title, description } = req.body;

            console.log(req.body);

            const surveysRepository = getCustomRepository(SurveysRepository);

            const survey = surveysRepository.create({
                title,
                description
            });

            await surveysRepository.save(survey);
            return res.status(201).json({ ...survey, message: 'survey created' });
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    async show(req: Request, res: Response) {
        try {
            const surveysRepository = getCustomRepository(SurveysRepository);

            const all = await surveysRepository.find();
            return res.status(200).json(all);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}

export { SurveysController };