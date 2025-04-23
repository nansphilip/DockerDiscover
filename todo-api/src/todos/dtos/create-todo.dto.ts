import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

/**
 * Data transfer object for creating a new Todo item
 */
export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  readonly title: string;
} 