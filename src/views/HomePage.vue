<script setup lang="ts">
import HeroSlider from '../component/HeroSlider.vue'
import { defineComponent } from 'vue'
defineComponent({
  name: 'HomePage'
})
</script>

<template>
  <div class="HomePage">
    <HeroSlider />
  </div>
</template>

<style lang="scss" scoped>
.HomePage {
  width: 100%;
  height: 100%;
  padding: 0 1rem;
}
</style>
