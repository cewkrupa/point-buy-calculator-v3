<template>
  <div class="level">
    <div class="level-item score">
      8
    </div>
    <div class="level-item score-controls">
      <div class="score-increment">
        +
      </div>
      <div class="score-decrement">
        -
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Score',
  data () {
    return {
      score: null
    }
  },
  methods: {
    increment() {
      this.$emit('increment', 'score')
    },
    decrement () {
      this.$emit('decrement', 'score')
    }
  }
})
</script>
