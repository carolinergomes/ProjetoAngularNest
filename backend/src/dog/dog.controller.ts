import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DogService } from './dog.service';
import { CreateDogDto } from './dto/create-dog.dto';


@Controller('api/dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Get()
  findAll() {
    
    return this.dogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogService.findOne(+id);
  }



 
}