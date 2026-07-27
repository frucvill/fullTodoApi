import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    description: 'The title of the todo',
    example: 'My first todo',
  })
  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @ApiProperty({
    description: 'The description of the todo',
    example: 'Detailed descrition of the task',
    required: false,
  })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({
    description: 'The completion status of the todo',
    example: 'false',
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  readonly completed?: boolean;
}
