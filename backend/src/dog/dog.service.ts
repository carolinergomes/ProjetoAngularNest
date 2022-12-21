import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDogDto } from './dto/create-dog.dto';

import { Dog } from './entities/dog.entity';

@Injectable()
export class DogService {

  constructor(
    @InjectRepository(Dog)
    private dogsRepository: Repository<Dog>,
  ) {}
  //-----------------------------------------------------------------------------------------------
  async create(createDogDto: CreateDogDto) {
      try {
        await this.dogsRepository.insert(createDogDto);
      
        return createDogDto;
      } catch (error) {
      
      return 'Essa ação adiciona um novo pet';
    }
  }
  async findAll(): Promise<Dog[]> {
    try {
      return await this.dogsRepository.find();
    } catch (err) {
      console.log('Impossível buscar pet');
      return null;
    }
  }

  async findOne(id: number): Promise<Dog> {
    const dog = this.dogsRepository
    .createQueryBuilder('dog')
    .select(['dog.name'])
    .getOne();
  if (!dog) throw new NotFoundException('pet não encontrado');

  return dog;
}

  //-----------------------------------------------------------------------------------------------


}