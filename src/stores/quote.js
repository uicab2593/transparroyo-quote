import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
// import { i18n } from 'vue-i18n';

export const useQuoteStore = defineStore('quotes', () => {

  const quoteConsecutive = ref(200)

  return {
    quoteConsecutive,
  }
},{
  persist: {
    enabled:true,
    strategies: [
      {
        storage: localStorage,
        paths: ['quoteConsecutive']
      },
    ]
  }
})
