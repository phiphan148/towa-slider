import { ref } from 'vue'

export async function useFetch(url: string) {
  const isLoading = ref(true);
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
