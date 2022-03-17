<script setup lang="ts">
import HomeView from '@/views/Home.vue'
</script>

<template>
  <main className="app">
    <h1 className="app__heading">Welcome to the Get Beer app!</h1>
    <HomeView />
  </main>
</template>

<style scoped>
.app {
  margin: 0 auto;
  max-width: 640px;
}

.app__heading {
}
</style>
