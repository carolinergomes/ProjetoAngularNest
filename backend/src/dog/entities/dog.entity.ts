import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  PrimaryGeneratedColumn,

} from 'typeorm';
@Entity('tbl_dog')

export class Dog {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  nome: string;
  @Column()
  raca: string;
  @Column()
  idade: number;
  @Column()
  porte: string;
}
