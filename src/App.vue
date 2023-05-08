<template>
<div id="app">
  <Index></Index>
</div>
</template>

<script>
import Index from './page/index.vue'
export default {
  name: 'App',
  components: {
    Index,
  },
}
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
</style>
