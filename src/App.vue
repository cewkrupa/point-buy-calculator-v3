<template>
  <div id="app">
    <h1 class="title">
      Point Buy Calculator v3
    </h1>
    <Table></Table>
    <Row
      name="Strength"
      :score="score"
      :point-cost="0"
      :modifier="-1"
      v-on:update:score="score = $event"
    ></Row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Row from './components/Row.vue'
import Table from './components/Table.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Row,
    Table
  },
  data: function() {
    return {
      score: 8
    }
  },
  methods: {
    updateScore(newScore: number) {
      this.score = newScore
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
