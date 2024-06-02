<script setup lang="ts">
import { useFetch } from '../service/fetch'
import { toggleSlider, updateIndicators } from '../static/js/slider'
import Product from '../core/Product'
import { defineComponent, onMounted, ref } from 'vue'

defineComponent({
  name: 'HeroSlider'
})

const products = ref<Product[]>([])

const fetchData = async () => {
  const data = await useFetch('https://dummyjson.com/products')
  products.value = data.products
}

onMounted(async () => {
  await fetchData()
  updateIndicators()
  toggleSlider()
})
</script>

<template>
  <div class="HeroSlider">
    <div class="HeroSlider__Content">
      <div class="HeroSlider__Item"
           :style="{'--heroImg': 'url(' + product.thumbnail + ')'}"
           v-for="product in products"
           :key="product.id">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
        <div class="HeroSlider__Button">
          <a href="#" class="HeroSlider__Button-primary">Mehr erfahren</a>
          <a href="#" class="HeroSlider__Button-secondary">Kontakt</a>
        </div>
      </div>
    </div>
    <div class="HeroSlider__Control">
      <div class="HeroSlider__Indicator">
        <span v-for="product in products"
              :key="product.id"
              class="HeroSlider__Bar"
        >
      </span>
      </div>
      <div class="HeroSlider__Arrow">
        <span class="HeroSlider__Arrow-previous">&#10094;</span>
        <span class="HeroSlider__Arrow-next">&#10095;</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$button-primary-color: #009494;
$button-primary-hover-color: #006565;
$bg-grey-color: #484848;
$tablet-width: 600px;
$desktop-width: 600px;

.HeroSlider {
  position: relative;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  height: 550px;
  background-color: #777777;

  @media (min-width: $tablet-width) {
    height: 450px;
  }

  @media (min-width: $desktop-width) {
    height: 350px;
  }

  &__Content {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
    height: 100%;
  }

  &__Item {
    min-width: 100%;
    box-sizing: border-box;
    background-image: var(--heroImg),
    linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 1));
    background-repeat: no-repeat;
    background-position: center;
    color: white;
    align-content: end;
    padding: 2rem;

    h1 {
      font-size: 2.5em;
    }

    p {
      font-size: 1.2em;
    }
  }

  &__Button {
    display: flex;
    gap: 10px;
    margin: 1rem;

    &-primary, &-secondary {
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s ease;
      color: white;
    }

    &-primary {
      background-color: $button-primary-color;

      &:hover {
        background-color: $button-primary-hover-color;
      }
    }

    &-secondary {
      border: 1px white solid;

      &:hover {
        background-color: $bg-grey-color;
      }
    }
  }

  &__Control {
    display: flex;
    position: absolute;
    bottom: 1rem;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  &__Indicator {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
  }

  &__Bar {
    display: inline-block;
    width: 10px;
    height: 5px;
    background-color: $bg-grey-color;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    &.active {
      background-color: white;
    }
  }

  &__Arrow {
    padding-right: 2rem;
    z-index: 2;
    display: none;

    @media (min-width: $tablet-width) {
      display: inline-block;
    }

    &-previous, &-next {
      color: white;
      border: none;
      cursor: pointer;
    }

    &-previous {
      padding-right: 0.5rem;
    }
    &-next {
      padding-left: 0.5rem;
    }
  }
}
</style>
