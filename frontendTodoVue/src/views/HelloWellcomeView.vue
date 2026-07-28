<template>
  <v-container class="fill-height d-flex flex-column justify-center align-center text-center py-12">
    
    <!-- 1. Sección de Tecnologías -->
    <TechStack />

    <!-- Título principal -->
    <h1 class="text-h3 font-weight-bold mb-3 text-grey-darken-4">
      FullTodo Application
    </h1>

    <!-- Subtítulo o badge interactivo -->
    <div class="sub-banner mb-6 pa-2 px-4 rounded-pill text-body-2 font-weight-medium">
      FullStack Architecture &bull; NestJS + Vue 3 + Docker
    </div>

    <!-- Botón de llamada a la acción -->
    <div class="mb-10">
      <v-btn
        color="success"
        size="large"
        variant="flat"
        class="text-none font-weight-bold px-6 rounded-lg elevation-2"
        to="/todos"
        prepend-icon="mdi-format-list-checks"
      >
        Ir a mis Tareas
      </v-btn>
    </div>

    <!-- 2. Sección de Características -->
    <TechFeatures />

  </v-container>
</template>

<script setup lang="ts">
import TechStack from '@/components/home/TechStack.vue';
import TechFeatures from '@/components/home/TechFeatures.vue';
</script>

<style scoped>
.sub-banner { 
  background-color: rgba(0, 0, 0, 0.04);
  color: #555;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
