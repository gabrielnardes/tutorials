import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../errors/AppError';

import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveysController {
    async create(req: Request, res: Response) {
        const { title, description } = req.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const surveyAlreadyExists = await surveysRepository.findOne({
            description,
        });

        if (surveyAlreadyExists) {
            throw new AppError('Survey already exists');
        }

        const survey = surveysRepository.create({
            title,
            description,
        });

        await surveysRepository.save(survey);

        return res.status(201).json(survey);
    }

    async show(req: Request, res: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);

        const all = await surveysRepository.find();

        return res.json(all);
    }
}

export { SurveysController };
