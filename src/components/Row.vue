<template>
  <div class="container">
    <div class="columns">
      <div class="column is-one-fifth">
        {{ name }}
      </div>
      <div class="column is-one-fifth">
        <Score :score="score" v-on:update:score="$emit('update:score', $event)"></Score>
      </div>
      <div class="column is-one-fifth">
        {{ pointCost }}
      </div>
      <div class="column is-one-fifth">
        {{ modifier }}
      </div>
      <div class="column is-one-fifth">
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
    pointCost: Number,
    modifier: Number
  }
})
</script>
