<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { Todo } from '../dtos/todo.dto';

const props = defineProps<{
  modelValue: boolean; // Controla la apertura (v-model)
  todo: Todo | null;   // La tarea que se está editando
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'save', updatedData: { title: string; description: string; completed: boolean }): void;
}>();

// Estado reactivo local del formulario dentro del modal
const form = reactive({
  title: '',
  description: '',
  completed: false,
});

// Sincroniza los datos cuando el modal se abre y recibe una tarea
watch(() => props.todo, (newTodo) => {
  if (newTodo) {
    form.title = newTodo.title;
    form.description = newTodo.description || '';
    form.completed = newTodo.completed;
  }
}, { immediate: true });

const handleSave = () => {
  if (!form.title.trim()) return;
  
  // Emitimos los datos modificados al componente padre
  emit('save', {
    title: form.title,
    description: form.description,
    completed: form.completed,
  });
};

const close = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <v-dialog :model-value="modelValue" @update:model-value="close" max-width="500px">
    <v-card class="pa-4">
      <v-card-title class="text-h6 font-weight-bold">Editar Tarea</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleSave">
          <v-text-field
            v-model="form.title"
            label="Título"
            variant="outlined"
            class="mb-3"
            required
          ></v-text-field>

          <v-textarea
            v-model="form.description"
            label="Descripción"
            variant="outlined"
            class="mb-3"
            rows="3"
          ></v-textarea>

          <v-switch
            v-model="form.completed"
            label="¿Completada?"
            color="primary"
          ></v-switch>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn variant="text" @click="close">Cancelar</v-btn>
        <v-btn color="primary" variant="flat" @click="handleSave">Guardar Cambios</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
