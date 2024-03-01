<template>
  <nav class="px-5 py-6 shadow-md md:px-14">
    <ul class="flex justify-between">
      <li><h2 class="font-bold text-xl">Where in the world?</h2></li>
      <li class="flex align-middle cursor-pointer">
        <Icon icon="ph:moon" width="18" height="18" class="mt-1 mr-1" />
        <p>Dark Mode</p>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
