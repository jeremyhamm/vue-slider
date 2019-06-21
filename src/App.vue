<template>
  <div id="app">
    <slider
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
      :links="[
        {'id': 1, 'text': 'Link 1', 'url': 'https://github.com'},
        {'id': 2, 'text': 'Link 2', 'url': 'https://github.com'},
        {'id': 3, 'text': 'Link 3', 'url': 'https://github.com'}
      ]"
    >
    </slider>
  </div>
</template>

<script>
import Slider from './components/Slider'
export default {
  name: 'app',
  components: {
    'slider': Slider
  }
}
</script>

<style lang="scss">
  #app {
    padding: 2em;
  }
</style>
