import Slider from '@/components/Slider'

// Export individual component
export { Slider }

// What should happen if the user installs the library as a plugin
function install (Vue) {
  Vue.component('Slider', Slider)
}

export default { install: install }
