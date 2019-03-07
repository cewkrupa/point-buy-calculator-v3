<template>
  <div class="container">
    <div class="level">
      <div class="level-item">
        {{ name }}
      </div>
      <div class="level-item">
        <Score :score="score" v-on:update:score="$emit('update:score', $event)"></Score>
      </div>
      <div class="level-item">
        {{ pointCost }}
      </div>
      <div class="level-item">
        {{ modifier }}
      </div>
      <div class="level-item">
        <button class="button">
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
