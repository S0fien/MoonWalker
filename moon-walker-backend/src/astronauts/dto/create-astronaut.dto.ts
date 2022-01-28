import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAstronautDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    example: ['Neurosciences', 'Advanced mechanics', 'Multilingual'],
  })
  @IsArray()
  @IsNotEmpty()
  skills: string;

  @ApiProperty({ example: 'Male' })
  @IsString()
  @IsNotEmpty()
  gender: string;

  @ApiProperty({ example: 'France' })
  @IsString()
  @IsNotEmpty()
  country: string;

  @ApiProperty({
    example:
      'John Doe is the first astronaut to ever land on another constellation.',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({ example: '30' })
  @IsInt()
  @Min(18)
  age: number;
}
