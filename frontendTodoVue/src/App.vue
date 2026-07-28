<!-- <script setup lang="ts">

</script>

<template>
  <v-app>
   <router-view/>
  </v-app>
</template> -->

<template>
  <v-app>
    <!-- Barra de navegación superior con Vuetify -->
    <v-app-bar flat border class="px-4">
      <v-app-bar-title class="font-weight-bold text-success">
        <v-icon icon="mdi-check-box-outline" class="mr-2" />
        FullTodo App
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn
          variant="text"
          to="/"
          class="text-none font-weight-medium"
        >
          Inicio
        </v-btn>
        <v-btn
          color="success"
          variant="flat"
          to="/todos"
          class="text-none font-weight-bold ml-2"
          prepend-icon="mdi-format-list-checks"
        >
          Mis Tareas
        </v-btn>
      </template>
    </v-app-bar>

    <!-- Contenedor principal donde se cargan las vistas -->
    <v-main class="bg-grey-lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Lógica de la barra de navegación si se requiere posteriormente
</script>
