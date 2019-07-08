import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Slider from '@/components/Slider.vue'

describe('Slider.vue', () => {
  it('shows the menu when the menu icon is clicked', () => {
    const wrapper = shallowMount(Slider, {
      propsData: {
        width: 200,
        links: [{
          id: 1,
          text: 'Link 1',
          url: 'https://github.com'
        }]
      }
    })
    // make sure the width is set
    expect(wrapper.props().width).to.equal(200)
    // check the menu is initially closed
    // initial menuWidth width should be 0
    expect(wrapper.vm.menuWidth.width).to.equal(0)
    // get the nav menu
    const navMenu = wrapper.find('[data-test-ref="navMenuLink"]')
    // now, click on the menu icon
    navMenu.trigger('click')
    // check to make sure the menu is shown
    expect(wrapper.vm.menuWidth.width).to.equal('200px')
    // click on the menu icon again
    navMenu.trigger('click')
    // check to make sure the menu is closed
    expect(wrapper.vm.menuWidth.width).to.equal(0)
  })
})
