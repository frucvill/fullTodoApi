<template>
  <v-row justify="center" class="w-100 max-width-container mt-6">
    <v-col cols="12" sm="4" md="3">
      <v-card variant="flat" class="pa-4 bg-grey-lighten-4 rounded-lg h-100 text-center">
        <v-icon icon="mdi-api" size="32" color="success" class="mb-2" />
        <div class="font-weight-bold mb-1">Backend Robusto</div>
        <p class="text-caption text-grey-darken-1 mb-0">API REST escalable con NestJS y Mongoose.</p>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" md="3">
      <v-card variant="flat" class="pa-4 bg-grey-lighten-4 rounded-lg h-100 text-center">
        <v-icon icon="mdi-view-dashboard-outline" size="32" color="success" class="mb-2" />
        <div class="font-weight-bold mb-1">Frontend Moderno</div>
        <p class="text-caption text-grey-darken-1 mb-0">Interfaz fluida construida con Vue 3 y Vuetify.</p>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4" md="3">
      <v-card variant="flat" class="pa-4 bg-grey-lighten-4 rounded-lg h-100 text-center">
        <v-icon icon="mdi-server-network" size="32" color="success" class="mb-2" />
        <div class="font-weight-bold mb-1">Dockerizado</div>
        <p class="text-caption text-grey-darken-1 mb-0">Orquestación completa con Docker Compose.</p>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.max-width-container {
  max-width: 900px;
}
</style>
