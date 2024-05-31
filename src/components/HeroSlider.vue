<script setup lang="ts">
import { useFetch } from '@/service/fetch'
import { toggleSliderButton, updateIndicators } from '@/static/js/slider'
import Product from '@/service/Product'
import { onMounted } from "vue";

const data= await useFetch('https://dummyjson.com/products');
const products: Product[] = data.products;
onMounted(() => {
  updateIndicators();
  toggleSliderButton();
});
</script>

<template>
  <div class="HeroSlider">
    <div class="HeroSlider__Content">
      <div class="HeroSlider__Item"
           v-for="product in products"
           :key="product.id">
        <div class="HeroSlider__Info">
          <h1>{{ product.title }}</h1>
          <p>{{ product.description }}</p>
          <div class="HeroSlider__Button">
            <a href="#" class="HeroSlider__Button-primary">Mehr erfahren</a>
            <a href="#" class="HeroSlider__Button-secondary">Kontakt</a>
          </div>
        </div>
        <div class="HeroSlider__Image">
          <img :src="product.thumbnail" :alt="product.brand">
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
.HeroSlider {
  position: relative;
  max-width: 100%;
  margin: auto;
  overflow: hidden;

  &__Content {
    display: flex;
    transition: transform 0.5s ease;
    width: 100%;
  }

  &__Item {
    min-width: 100%;
    box-sizing: border-box;
    background-color: #f5f5f5;
  }

  &__Info {
    position: absolute;
    width: 100%;
    z-index: 1;
    color: white;
    top: 10%;
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
    margin-top: 1rem;

    &-primary, &-secondary {
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 0.3s ease;
      color: white;
    }

    &-primary {
      background-color: #009494;

      &:hover {
        background-color: #006565;
      }
    }

    &-secondary {
      border: 1px white solid;

      &:hover {
        background-color: #484848;
      }
    }
  }

  &__Image {
    position: relative;
    width: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 1));
    text-align: center;

    img {
      height: auto;
      object-fit: contain;
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
    flex-wrap: nowrap;
    gap: 2px;
  }

  &__Bar {
    display: inline-block;
    width: 20px;
    height: 5px;
    background-color: #777777;
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

    @media (min-width: 376px) {
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
/*@media (min-width: 768px) {
  .HeroSlider__Item {
    flex-direction: row;
  }

  .HeroSlider__Content {
    text-align: left;
    max-width: 50%;
  }

  .HeroSlider__Image {
    max-width: 50%;
  }
}*/
</style>
