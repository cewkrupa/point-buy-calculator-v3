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
  methods: {
    updateScore(ability, updatedScore) {
      ability.score = updatedScore
    }
  },
  data: function() {
    return {
      abilities: [
        {
          'name': 'Strength',
          'score': 8,
          'modifier': -1,
          'cost': 0
        },
        {
          'name': 'Dexterity',
          'score': 8,
          'modifier': -1,
          'cost': 0
        },
        {
          'name': 'Constitution',
          'score': 8,
          'modifier': -1,
          'cost': 0
        },
        {
          'name': 'Intelligence',
          'score': 8,
          'modifier': -1,
          'cost': 0
        },
        {
          'name': 'Wisdom',
          'score': 8,
          'modifier': -1,
          'cost': 0
        },
        {
          'name': 'Charisma',
          'score': 8,
          'modifier': -1,
          'cost': 0
        }
      ]
    }
  }
})
</script>

<style scoped>

</style>
