import { IsOptional, IsString, IsBoolean, MaxLength } from 'class-validator';

/**
 * Data transfer object for updating an existing Todo item
 */
export class UpdateTodoDto {
  @IsString()
  @IsOptional()
  @MaxLength(100)
  readonly title?: string;

  @IsBoolean()
  @IsOptional()
  readonly checked?: boolean;
} 