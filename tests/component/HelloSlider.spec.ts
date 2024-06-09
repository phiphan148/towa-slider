import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import HeroSlider from '../../src/component/HeroSlider.vue'
import { toggleSlider, updateIndicators } from '../../src/static/js/slider'

vi.mock('../../src/static/js/slider', () => ({
  toggleSlider: vi.fn(),
  updateIndicators: vi.fn()
}));

describe('HeroSlider.vue', () => {
  let props: any;
  const product3 = { id: 3, title: 'Product 3', description: 'Description 3', thumbnail: 'thumbnail3.jpg' };
  const product4 = { id: 4, title: 'Product 4', description: 'Description 4', thumbnail: 'thumbnail4.jpg' };

  beforeEach(() => {
    props = {
      products: [
        { id: 1, title: 'Product 1', description: 'Description 1', thumbnail: 'thumbnail1.jpg' },
        { id: 2, title: 'Product 2', description: 'Description 2', thumbnail: 'thumbnail2.jpg' }
      ]
    };
    vi.resetAllMocks()
  })

  it('renders HeroSlider with mock products', async () => {
    const wrapper = mount(HeroSlider, { props });
    const items = wrapper.findAll('.HeroSlider__Item')
    expect(wrapper.exists()).toBe(true)
    expect(items[0].find('h1').text()).toBe('Product 1')
    expect(items[1].find('h1').text()).toBe('Product 2')
  })

  it('calls updateIndicators and toggleSlider on updated', async () => {
    const wrapper = mount(HeroSlider, { props });
    expect(updateIndicators).toHaveBeenCalledTimes(0);
    await wrapper.setProps({ products: [...props.products, product3] });
    expect(updateIndicators).toHaveBeenCalledTimes(1)
    expect(toggleSlider).toHaveBeenCalledTimes(1)
  })

  it('does not call updateIndicators and toggleSlider more than once', async () => {
    const wrapper = mount(HeroSlider, { props });
    await wrapper.setProps({ products: [...props.products, product3] });
    await wrapper.setProps({ products: [...props.products, product4] });
    expect(updateIndicators).toHaveBeenCalledTimes(1)
    expect(toggleSlider).toHaveBeenCalledTimes(1)
  })
})
