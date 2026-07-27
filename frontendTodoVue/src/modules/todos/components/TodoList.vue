<script setup lang="ts">
import type { Todo } from '../dtos/todo.dto';
import TodoItem from './TodoItem.vue';

defineProps<{
  todos: Todo[];
  loading: boolean;
  error: string | null;
}>();

const emit = defineEmits<{
  (e: 'toggle', id: string, completed: boolean): void;
  (e: 'delete', id: string): void;
  (e: 'edit', todo: Todo): void;
}>();
</script>

<template>
  <!-- Indicador de Carga -->
  <div v-if="loading" class="text-center py-4">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>

  <!-- Alerta de Error -->
  <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
    {{ error }}
  </v-alert>

  <!-- Lista de Tareas -->
  <v-list v-if="!loading && todos.length > 0" lines="one">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle="(id, completed) => emit('toggle', id, completed)"
      @delete="(id) => emit('delete', id)"
      @edit="(todo) => emit('edit', todo)"
    />
  </v-list>

  <!-- Estado Vacío -->
  <v-sheet v-else-if="!loading" class="text-center py-6 text-grey">
    No hay tareas registradas. ¡Crea una arriba!
  </v-sheet>
</template>
