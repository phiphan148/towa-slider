import { flushPromises, mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import HeroSlider from '../../src/components/HeroSlider.vue'
import { useFetch } from '../../src/service/fetch'
import { toggleSlider, updateIndicators } from '../../src/static/js/slider'

vi.mock('../../src/service/fetch')
vi.mock('../../src/static/js/slider')

describe('HeroSlider.vue', () => {
  it('renders products correctly', async () => {
    // Mocking useFetch response
    (useFetch as any).mockResolvedValue({
      products: [
        { id: 1, title: 'Product 1', description: 'Description 1', thumbnail: 'thumbnail1.jpg' },
        { id: 2, title: 'Product 2', description: 'Description 2', thumbnail: 'thumbnail2.jpg' }
      ]
    })

    const wrapper = mount(HeroSlider)

    // Wait for the component to finish its async operations
    await flushPromises()

    expect(wrapper.exists()).toBe(true)

    // Check if products are rendered
    const items = wrapper.findAll('.HeroSlider__Item')

    expect(items[0].find('h1').text()).toBe('Product 1')
    expect(items[0].find('p').text()).toBe('Description 1')
    expect(items[1].find('h1').text()).toBe('Product 2')
    expect(items[1].find('p').text()).toBe('Description 2')

    // Check if updateIndicators and toggleSlider are called
    expect(updateIndicators).toHaveBeenCalled()
    expect(toggleSlider).toHaveBeenCalled()
  })
})
