<template>
  <div id="app" ref="app">
    <slider
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
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
