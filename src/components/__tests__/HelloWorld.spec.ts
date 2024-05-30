import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HeroSlider from '../HeroSlider.vue'

describe('HeroSlider', () => {
  it('renders properly', () => {
    const wrapper = mount(HeroSlider, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Phi')
  })
})
