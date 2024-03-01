<template>
  <div class="shadow-md rounded overflow-hidden leading-6 w-60 h-80 bg-white">
    <!-- <div class=""> -->
    <img :src="flagUrl" :alt="name" class="w-full h-32 object-cover" />
    <!-- </div> -->

    <div class="p-7 pb-10">
      <p class="font-bold text-base mb-3">{{ name }}</p>

      <p><span class="font-semibold">Population:</span> {{ population }}</p>
      <p><span class="font-semibold">Region:</span> {{ region }}</p>
      <p><span class="font-semibold">Capital:</span> {{ capital }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  flagUrl: string
  name: string
  population: number
  region: string
  capital: string
}>()
</script>
