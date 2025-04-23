import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo.dto';
import { PrismaService } from '../prisma/prisma.service';

/**
 * Service responsible for managing Todo items
 */
@Injectable()
export class TodosService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Find all Todo items
   * @returns Array of Todo items
   */
  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  /**
   * Find a Todo item by its ID
   * @param id Todo ID
   * @returns Todo item if found
   * @throws NotFoundException if Todo not found
   */
  async findById(id: number): Promise<Todo> {
    const todo = await this.prisma.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }

    return todo;
  }

  /**
   * Create a new Todo item
   * @param createTodoDto DTO containing Todo data
   * @returns Created Todo item
   */
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        checked: false,
      },
    });
  }

  /**
   * Update an existing Todo item
   * @param id Todo ID
   * @param updateTodoDto DTO containing fields to update
   * @returns Updated Todo item
   * @throws NotFoundException if Todo not found
   */
  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    try {
      return await this.prisma.todo.update({
        where: { id },
        data: {
          title: updateTodoDto.title,
          checked: updateTodoDto.checked,
        },
      });
    } catch (error) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
  }

  /**
   * Remove a Todo item
   * @param id Todo ID
   * @returns void
   * @throws NotFoundException if Todo not found
   */
  async remove(id: number): Promise<void> {
    try {
      await this.prisma.todo.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
  }
} 