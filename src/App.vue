<template>
  <div id="app">
    <h1 class="title">
      Point Buy Calculator v3
    </h1>
    <Row
      name="Strength"
      :score="8"
      :point-cost="0"
      :modifier="-1"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Row from './components/Row.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Row
  }
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
