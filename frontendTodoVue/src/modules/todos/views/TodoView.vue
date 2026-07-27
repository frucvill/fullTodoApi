<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useTodoStore } from '../stores/todo.store';
import TodoForm from '../components/TodoForm.vue';
import TodoList from '../components/TodoList.vue';
import TodoEditModal from '../components/TodoEditModal.vue';
import type { Todo } from '../dtos/todo.dto';

const todoStore = useTodoStore();

const isEditModalOpen = ref(false);
const selectedTodo = ref<Todo | null>(null);

onMounted(() => {
  todoStore.fetchTodos();
});

const handleCreate = async (title: string) => {
  await todoStore.addTodo({ title });
};

const handleToggle = (id: string, completed: boolean) => {
  todoStore.updateTodo(id, { completed });
};

const handleDelete = (id: string) => {
  todoStore.deleteTodo(id);
};

const openEditModal = (todo: Todo) => {
  selectedTodo.value = todo;
  isEditModalOpen.value = true;
};

const handleUpdateSubmit = async (updatedData: { title: string; description: string; completed: boolean }) => {
  if (!selectedTodo.value) return;

  await todoStore.updateTodo(selectedTodo.value.id, updatedData);
  isEditModalOpen.value = false;
  selectedTodo.value = null;
};
</script>

<template>
  <v-container class="py-8" style="max-width: 600px;">
    <v-card class="elevation-3 pa-6 rounded-lg">
      
      <v-card-title class="text-h5 font-weight-bold px-0 mb-4">
        <v-icon icon="mdi-checkbox-marked-outline" class="mr-2" color="primary"></v-icon>
        Gestión de Tareas (NestJS + Vue)
      </v-card-title>

      <!-- Formulario extraído -->
      <TodoForm @create="handleCreate" />

      <!-- Lista y estados extraídos -->
      <TodoList
        :todos="todoStore.todos"
        :loading="todoStore.loading"
        :error="todoStore.error"
        @toggle="handleToggle"
        @delete="handleDelete"
        @edit="openEditModal"
      />

    </v-card>

    <!-- Modal de edición -->
    <TodoEditModal
      v-model="isEditModalOpen"
      :todo="selectedTodo"
      @save="handleUpdateSubmit"
    />

  </v-container>
</template>
