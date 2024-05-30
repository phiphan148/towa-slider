<script setup lang="ts">
import { useFetch } from '@/service/fetch'
import Product from '@/service/Product'

const data= await useFetch('https://dummyjson.com/products');
const products: Product[] = data.products;
console.log(products[0].brand)

</script>

<template>
  <div class="HeroSlider">

  </div>
</template>

<style lang="sass" scoped>

</style>
