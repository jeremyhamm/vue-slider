<template>
  <div id="app">
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
