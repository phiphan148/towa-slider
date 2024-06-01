import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//This is just an original code when doing vue-create with vueX is being installed in the package
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
