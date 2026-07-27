import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Todo, CreateTodoDto, UpdateTodoDto } from '../dtos/todo.dto';
import { todoService } from '../services/todo.service';

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchTodos = async () => {
    loading.value = true;
    error.value = null;
    try {
      todos.value = await todoService.findAll();
    } catch (err: any) {
      error.value = 'Error al cargar las tareas';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const addTodo = async (dto: CreateTodoDto) => {
    try {
      const newTodo = await todoService.create(dto);
      todos.value.push(newTodo);
    } catch (err) {
      console.error('Error al crear tarea', err);
    }
  };

  const updateTodo = async (id: string, dto: UpdateTodoDto) => {
    try {
      const updated = await todoService.update(id, dto);
      const index = todos.value.findIndex((t) => t.id === id);
      if (index !== -1) {
        todos.value[index] = updated;
      }
    } catch (err: any) {
      // console.error('Error al actualizar tarea', err);
      console.log(' Detail error:', err.response?.data);
    }
  };

  const deleteTodo = async (id: string) => {
    console.log('ID recibido:', id);
    if(!id){
      console.error('ID de tarea no proporcionado');
      return;
    }
    try {
      await todoService.remove(id);
      todos.value = todos.value.filter((t) => t.id !== id);
    } catch (err) {
      console.error('Error al eliminar tarea', err);
    }
  };

  return {
    todos,
    loading,
    error,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
  };
});
