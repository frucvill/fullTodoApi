<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'create', title: string): void;
}>();

const newTitle = ref('');

const handleSubmit = () => {
  if (!newTitle.value.trim()) return;
  emit('create', newTitle.value);
  newTitle.value = '';
};
</script>

<template>
  <v-form @submit.prevent="handleSubmit" class="d-flex gap-2 mb-4">
    <v-text-field
      v-model="newTitle"
      label="¿Qué necesitas hacer?"
      variant="outlined"
      density="comfortable"
      hide-details
      clearable
    ></v-text-field>
    <v-btn 
      type="submit" 
      color="primary" 
      size="large" 
      elevation="1"
      prepend-icon="mdi-plus"
    >
      Agregar
    </v-btn>
  </v-form>
</template>
