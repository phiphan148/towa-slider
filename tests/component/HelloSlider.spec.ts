import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HeroSlider from '../../src/component/HeroSlider.vue'
import Product from '../../src/core/Product'

describe('HeroSlider.vue', () => {
  it('renders HeroSlider with mock products', async () => {
    const product1 = new Product({ id: 1, title: 'Product 1', description: 'Description 1', thumbnail: 'thumbnail1.jpg' })
    const product2 = new Product({ id: 2, title: 'Product 2', description: 'Description 2', thumbnail: 'thumbnail2.jpg' })

    const wrapper = mount(HeroSlider, {
      props: {
        products: [product1, product2]
      }
    })

    const items = wrapper.findAll('.HeroSlider__Item')

    expect(wrapper.exists()).toBe(true)
    expect(items[0].find('h1').text()).toBe('Product 1')
    expect(items[1].find('h1').text()).toBe('Product 2')
  })
})
