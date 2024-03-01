import { defineStore } from 'pinia'

const url = 'https://restcountries.com/v3.1/'
// const url = 'https://restcountries.com/v3.1/all'

interface Country {
  name: { common: string; official: string }
  flags: { alt: string; png: string; svg: string }
  population: number
  region: string
  capital: string[]
}
export const useCountryStore = defineStore('countryStore', {
  state: () => ({
    countries: [] as Country[],
    loading: false
  }),
  getters: {},
  actions: {
    async getCountries() {
      this.loading = true
      const res = await fetch(`${url}/all?fields=name,flags,population,region,capital`)
      const data = await res.json()
      this.countries = data
      this.loading = false
      console.log('countries >>>> ', data)
    },
    async searchCountry(countryName: string) {
      if (countryName) {
        try {
          const res = await fetch(`${url}/name/${countryName}`)
          const data = await res.json()
          return (this.countries = data)
        } catch (error) {
          console.log(error)
        }
      }
      this.getCountries()
    }
  }
})
