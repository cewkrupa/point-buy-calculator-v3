<template>
  <div id="app">
    <h1 class="title">
      Point Buy Calculator v3
    </h1>
    <div class="stats">
      <span class="total">Total: {{total}}</span>
      <span class="remaining">Remaining:</span>
      <span class="maxScore">Max Score: {{maxScore}}</span>
      <span class="minScore">Min Score: {{minScore}}</span>
    </div>
    <Table
      :abilityArray="abilities"
      :baseScore="baseScore"
      :maxScore="maxScore"
      :minScore="minScore"
      :thresholdScore="thresholdScore"
      :thresholdInterval="thresholdInterval"
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
  computed: {
    total() {
      return 3
    }
  },
  data: function() {
    return {
      abilities: config.abilities,
      baseScore: config.baseScore,
      maxScore: config.maxScore,
      minScore: config.minScore,
      thresholdScore: config.thresholdScore,
      thresholdInterval: config.thresholdInterval
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
  .stats > *{
    padding-left: 1em;
    padding-right: 1em;
  }
</style>
