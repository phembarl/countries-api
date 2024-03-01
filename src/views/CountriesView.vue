<script setup lang="ts">
import CountryCard from '@/components/CountryCard.vue'
import { useCountryStore } from '@/stores/CountryStore'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import debounce from 'lodash.debounce'

const countryStore = useCountryStore()
const { countries, loading } = storeToRefs(countryStore)

countryStore.getCountries()

const countryName = ref('')

// watch(
//   countryName,
//   debounce(() => {
//     console.log('Send API request')
//   }, 500)
// )
</script>

<template>
  <div class="relative">
    <input
      type="text"
      v-model="countryName"
      @input="countryStore.searchCountry(countryName)"
      class="shadow-md outline-none mb-16 px-16 py-4 w-96 rounded-md"
      placeholder="Search for a country..."
    />
    <Icon
      icon="material-symbols:search"
      width="25"
      height="25"
      class="absolute top-4 left-3 text-gray-400"
    />
  </div>

  <div v-if="loading" class="flex justify-center items-center">
    <Icon icon="tabler:loader-2" width="50" height="50" class="animate-spin" />
  </div>

  <div
    v-else
    class="flex flex-col flex-wrap justify-center md:justify-start items-center text-sm md:flex-row gap-10"
  >
    <span v-for="country in countries" :key="country.name.common" class="mb-6 justify-self-center">
      <CountryCard
        :name="country.name.common"
        :flag-url="country.flags.svg"
        :region="country.region"
        :population="country.population"
        :capital="country.capital[0]"
      />
    </span>
  </div>
</template>
