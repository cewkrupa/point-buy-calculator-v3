<template>
  <div>
    <div class="container">
      <div class="columns table-headers">
        <div class="column is-one-fifth is-size-7-mobile">Ability</div>
        <div class="column is-one-fifth is-size-7-mobile">Score</div>
        <div class="column is-one-fifth is-size-7-mobile">Point modifier</div>
        <div class="column is-one-fifth is-size-7-mobile">Point cost</div>
        <div class="column is-one-fifth is-size-7-mobile">&nbsp;</div>
      </div>
    </div>
    <div class="ability-rows">
      <Row v-for="ability in abilities"
           class="row"
           :key="ability.name"
           :name="ability.name"
           :score="ability.score"
           :point-cost="ability.cost"
           :modifier="ability.modifier"
           v-on:update:score="updateScore(ability, $event)"
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
    baseScore: Number
  },
  methods: {
    updateScore(ability, updatedScore) {
      ability.score = updatedScore
    },
    resetScore(ability) {
      this.updateScore(ability, this.baseScore)
    }
  },
  computed: {
    abilities() {
      return this.abilityArray
    }
  }
})
</script>

<style scoped>

</style>
