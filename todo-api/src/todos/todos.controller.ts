import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
import { Todo } from './models/todo.model';
import { TodosService } from './todos.service';

/**
 * Controller responsible for handling Todo-related endpoints
 */
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  /**
   * Retrieve all Todo items
   * @returns Array of Todo items
   */
  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  /**
   * Retrieve a specific Todo by ID
   * @param id Todo ID
   * @returns Todo item
   */
  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todosService.findById(id);
  }

  /**
   * Create a new Todo item
   * @param createTodoDto DTO containing Todo data
   * @returns Created Todo item
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }

  /**
   * Update an existing Todo item
   * @param id Todo ID
   * @param updateTodoDto DTO containing fields to update
   * @returns Updated Todo item
   */
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<Todo> {
    return this.todosService.update(id, updateTodoDto);
  }

  /**
   * Remove a Todo item
   * @param id Todo ID
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.todosService.remove(id);
  }

  /**
   * Smoke test endpoint
   * @returns A simple message
   */
  @Get('admin/test')
  adminTest(): { message: string } {
    return { message: 'Todo controller is working!' };
  }
}
