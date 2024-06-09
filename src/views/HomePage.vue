<script setup lang="ts">
import { useFetch } from '../service/fetch'
import { defineComponent, onMounted, ref } from 'vue'
import Product from '../core/Product'
import HeroSlider from '../component/HeroSlider.vue'

defineComponent({
  name: 'HomePage'
})

const products= ref<Product[]>([])

const fetchData = async () => {
  const data = await useFetch('https://dummyjson.com/products')
  products.value = data.products
}

onMounted(async () => {
  await fetchData()
})
</script>

<template>
  <div class="HomePage">
    <HeroSlider :products="products" />
  </div>
</template>

<style lang="scss" scoped>
.HomePage {
  width: 100%;
  height: 100%;
  padding: 0 1rem;
}
</style>
