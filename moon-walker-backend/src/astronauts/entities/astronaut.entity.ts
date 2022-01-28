import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Astronaut extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @UpdateDateColumn({
    name: 'updatedAt',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({
    name: 'firstname',
    type: 'varchar',
    length: 25,
  })
  firstname: string;

  @Column({
    name: 'lastname',
    type: 'varchar',
    length: 25,
  })
  lastname: string;

  @Column({
    name: 'age',
    type: 'integer',
  })
  age: number;

  @Column({
    name: 'skills',
    type: 'varchar',
    array: true,
  })
  skills: [string];

  @Column({
    name: 'gender',
    type: 'varchar',
    length: 6,
  })
  gender: string;

  @Column({
    name: 'country',
    type: 'varchar',
    length: 50,
  })
  country: string;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  description: string;
}
