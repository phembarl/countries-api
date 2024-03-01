<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div>
    <NavBar />
    <main class="p-5 md:px-14">
      <RouterView />
    </main>
  </div>
</template>
