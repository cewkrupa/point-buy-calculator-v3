<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth name-section">
        {{ name }}
      </div>
      <div class="column is-one-fifth score-section">
        <Score :score="score" :maxScore="maxScore" v-on:update:score="updateScore($event)"></Score>
      </div>
      <div class="column is-one-fifth modifier-section">
        {{ modifier(score) }}
      </div>
      <div class="column is-one-fifth point-cost-section">
        {{ cost }}
      </div>
      <div class="column is-one-fifth reset-section">
        <button class="button reset-button" @click="$emit('reset:score')">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Score from './Score.vue'

export default Vue.extend({
  name: 'Row',
  components: {
    Score
  },
  props: {
    name: String,
    score: Number,
    cost: Number,
    maxScore: Number,
    minScore: Number,
    thresholdScore: Number,
    thresholdInterval: Number
  },
  methods: {
    modifier (score: number) {
      return (Math.floor((score - 10) / 2))
    },
    updateScore (updatedScore: number) {
      let result = { score: updatedScore, cost: null as unknown as number }
      if (updatedScore > this.score) {
        if (updatedScore > this.thresholdScore) {
          result.cost = this.cost + this.thresholdInterval
        } else {
          result.cost = this.cost + 1
        }
      } else if (updatedScore < this.score) {
        if (updatedScore >= this.thresholdScore) {
          result.cost = this.cost - this.thresholdInterval
        } else {
          result.cost = this.cost - 1
        }
      }

      this.$emit('update:score', result)
    }
  }
})
</script>
