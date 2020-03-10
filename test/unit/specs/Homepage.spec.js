import { mount } from '@vue/test-utils'
import Homepage from '@/components/Homepage'
import Vue from 'vue'

describe('Homepage.vue', () => {
  let wrapper = mount(Homepage)
  it('should render correct contents', () => {
    expect(wrapper).toContain('<h1>Our products</h1>')
  })
})

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Homepage)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Our products')
  })
})
