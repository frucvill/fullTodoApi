import { apiClient } from '@/config/axios';
import type { Todo, CreateTodoDto, UpdateTodoDto, MongoTodo } from '../dtos/todo.dto';

class TodoService {
  private readonly endpoint = '/todos';

  //Aux function to map _id from API nestjs to id for frontend
  private mapTodo(item: MongoTodo): Todo {
    return {
      id: item._id,
      title: item.title,
      description: item.description,
      completed: item.completed,
      createdAt: item.createdAt ? new Date(item.createdAt) : undefined,
    };
  }
  
  async findAll(): Promise<Todo[]> {
    const response = await apiClient.get<MongoTodo[]>(this.endpoint);
    return response.data.map(this.mapTodo.bind(this));
  }

  async  create(dto: CreateTodoDto): Promise<Todo> {
    const { data } = await apiClient.post<MongoTodo>(this.endpoint, dto);
    return this.mapTodo(data);
  }
  async update(id: string, dto: UpdateTodoDto): Promise<Todo> {
    const { data } = await apiClient.put<MongoTodo>(`${this.endpoint}/${id}`, dto);
    return this.mapTodo(data);
  }

  async remove(id: string): Promise<void> {
    await apiClient.delete(`${this.endpoint}/${id}`);
  }
}

export const todoService = new TodoService();