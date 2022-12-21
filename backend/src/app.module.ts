import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './dog/entities/dog.entity';
import { DogModule } from './dog/dog.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 5300,
      username: 'admin',
      password: 'admin',
      database: 'todolist',
      entities: [Dog],
      synchronize: true,
      logging: true,
    }),
    DogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
