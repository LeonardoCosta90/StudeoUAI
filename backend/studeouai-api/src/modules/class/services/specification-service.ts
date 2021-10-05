import { SpecificationsRepository } from './../typeorm/repositories/specifications-repository';
import { CreateSpecificationRequest } from '../models/create-specifications-request';
import { getCustomRepository } from 'typeorm';
import { AppError } from '@shared/errors/app-error';

export class SpecificationService {
  async createSpecification({
    name,
    description,
  }: CreateSpecificationRequest): Promise<void> {
    const specificationsRepository = getCustomRepository(
      SpecificationsRepository,
    );
    const specificationAlreadyExists =
      await specificationsRepository.findSpecificationByName(name);

    if (specificationAlreadyExists) {
      throw new AppError('Specifications already exists.');
    }
    await specificationsRepository.create({
      name,
      description,
    });
  }
}
