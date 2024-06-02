import { ref } from 'vue'
import { type Ref } from "vue";

export async function useFetch(url: string, isLoading: Ref<boolean> = ref(true)) {
  let result:any = {};
  try {
    isLoading.value = true;
    result = await fetch(url).then((r) => r.json())
  } catch(e) {
    console.error('Catch error while fetching data from BE: ', e)
  } finally {
    isLoading.value = false;
  }
  return result
}
