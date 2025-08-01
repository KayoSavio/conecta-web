<template>
  <div id="app" class="min-h-screen bg-bg text-text">
    <Header />
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
// Componente principal da aplicação
</script>

<style scoped>
#app {
  font-family: 'Inter', system-ui, sans-serif;
}
</style> 