<script setup>
import nestLogo from '@/assets/Nest.js.svg';
</script>
<template>
  <div class="tech-stack-container mb-6">
    <v-row justify="center" align="center" no-gutters>
      <!-- Vue 3 -->
      <v-col cols="auto" class="pa-2">
        <v-tooltip text="Vue 3" location="bottom">
          <template v-slot:activator="{ props }">
            <v-img
              v-bind="props"
              src="https://vuejs.org/images/logo.png"
              width="50"
              height="50"
              class="tech-logo"
            />
          </template>
        </v-tooltip>
      </v-col>

      <!-- TypeScript -->
      <v-col cols="auto" class="pa-2">
        <v-tooltip text="TypeScript" location="bottom">
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              icon="mdi-language-typescript"
              size="48"
              color="blue-darken-2"
              class="tech-icon"
            />
          </template>
        </v-tooltip>
      </v-col>

      <!-- NestJS -->
      <v-col cols="auto" class="pa-2">
        <v-tooltip text="NestJS" location="bottom">
          <template v-slot:activator="{ props }">
            <v-img
              v-bind="props"
              :src="nestLogo"
              alt="NestJS"
              height="48"
              width="48"
              class="tech-icon"
            />
          </template>
        </v-tooltip>
      </v-col>

      <!-- MongoDB -->
      <v-col cols="auto" class="pa-2">
        <v-tooltip text="MongoDB" location="bottom">
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              icon="mdi-database"
              size="48"
              color="success"
              class="tech-icon"
            />
          </template>
        </v-tooltip>
      </v-col>

      <!-- Docker -->
      <v-col cols="auto" class="pa-2">
        <v-tooltip text="Docker" location="bottom">
          <template v-slot:activator="{ props }">
            <v-icon
              v-bind="props"
              icon="mdi-docker"
              size="48"
              color="blue-lighten-1"
              class="tech-icon"
            />
          </template>
        </v-tooltip>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.tech-logo, .tech-icon {
  transition: transform 0.2s ease-in-out;
}
.tech-logo:hover, .tech-icon:hover {
  transform: translateY(-5px);
}
</style>
