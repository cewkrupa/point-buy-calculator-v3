<template>
  <div id="app">
    <h1 class="title">
      Point Buy Calculator v3
    </h1>
    <Table
      :abilityArray="abilities"
      :baseScore="baseScore"
    ></Table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Table from './components/Table.vue'

const config = require('./config.json')

export default Vue.extend({
  name: 'App',
  components: {
    Table
  },
  data: function() {
    return {
      abilities: config.abilities,
      baseScore: config.baseScore
    }
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
