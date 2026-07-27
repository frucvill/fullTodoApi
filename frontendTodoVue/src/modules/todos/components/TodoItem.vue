<script setup lang="ts">
import type { Todo } from '../dtos/todo.dto';

defineProps<{
  todo: Todo;
}>();

const emit = defineEmits<{
  (e: 'toggle', id: string, completed: boolean): void;
  (e: 'delete', id: string): void;
  (e: 'edit', todo: Todo): void // New event for edit specific Todo
}>();
</script>

<template>
  <v-list-item class="border mb-2 rounded-sm">
    <template v-slot:prepend>+
      <v-checkbox-btn
        :model-value="todo.completed"
        @update:model-value="(newValue) => emit('toggle', todo.id, newValue)"
        color="primary"
      ></v-checkbox-btn>
    </template>

    <v-list-item-title :class="{ 'text-decoration-line-through text-grey': todo.completed }">
      {{ todo.title }}
    </v-list-item-title>

    <v-list-item-subtitle v-if="todo.description" class="text-grey-darken-1">
      {{ todo.description }}
    </v-list-item-subtitle>

    <template v-slot:append>
      <v-btn
        icon="mdi-pencil-outline"
        variant="text"
        color="info"
        size="small"
        class="me-1"
        @click="emit('edit',todo)"
      >
      </v-btn>
      <v-btn
        icon="mdi-delete-outline"
        variant="text"
        color="error"
        size="small"
        @click="emit('delete', todo.id)"
      ></v-btn>
    </template>
  </v-list-item>
</template>
