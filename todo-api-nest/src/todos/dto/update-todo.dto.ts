// export class UpdateTodoDto {
//   readonly title?: string;
//   readonly completed?: boolean;
// }
import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
