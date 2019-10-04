<template>
  <div>
    <div class="container">
      <div class="columns table-headers">
        <div class="column is-one-fifth is-size-7-mobile">Ability</div>
        <div class="column is-one-fifth is-size-7-mobile">Score</div>
        <div class="column is-one-fifth is-size-7-mobile">Point modifier</div>
        <div class="column is-one-fifth is-size-7-mobile">Point cost</div>
        <div class="column is-one-fifth is-size-7-mobile">
          <button class="button reset-all-button" @click="resetAll()">
            Reset All
          </button>
        </div>
      </div>
    </div>
    <div class="ability-rows">
      <Row v-for="ability in abilities"
           class="row"
           :data-qa="`row-${ability.name}`"
           :key="ability.name"
           :name="ability.name"
           :score="ability.score"
           :cost="ability.cost"
           :maxScore="maxScore"
           :minScore="minScore"
           :thresholdScore="thresholdScore"
           :thresholdInterval="thresholdInterval"
           v-on:update:score="updateScore(ability, $event['score'], $event['cost'])"
           v-on:reset:score="resetScore(ability)"
      >
      </Row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Row from './Row'

export default Vue.extend({
  name: 'Table',
  components: {
    Row
  },
  props: {
    abilityArray: Array,
    baseScore: Number,
    baseCost: Number,
    maxScore: Number,
    minScore: Number,
    thresholdScore: Number,
    thresholdInterval: Number
  },
  methods: {
    updateScore (ability, updatedScore, updatedCost) {
      if (updatedScore >= this.minScore && updatedScore <= this.maxScore) {
        ability.score = updatedScore
        ability.cost = updatedCost
      }
    },
    resetScore (ability) {
      this.updateScore(ability, this.baseScore, this.baseCost)
    },
    resetAll () {
      this.abilities.forEach((ability) => {
        this.resetScore(ability)
      })
    }
  },
  computed: {
    abilities () {
      return this.abilityArray
    }
  }
})
</script>

<style scoped>

</style>
