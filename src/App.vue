<script setup lang="ts">
import Home from '@/views/HomePage.vue'
</script>

<template>
  <Suspense>
    <!-- component with nested async dependencies -->
    <Home />

    <!-- loading state via #fallback slot -->
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style scoped>
</style>
