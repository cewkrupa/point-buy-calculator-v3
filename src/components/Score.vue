<template>
  <div class="level">
    <div class="level-item score">
      {{score}}
    </div>
    <div class="level-item score-controls">
      <button @click="increment" :disabled="score >= maxScore" class="score-increment button">
        +
      </button>
      <button @click="decrement" :disabled="score <= minScore" class="score-decrement button">
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Score',
  props: {
    score: {
      type: Number
    },
    maxScore: Number,
    minScore: Number
  },
  methods: {
    increment() {
      this.$emit('update:score', this.score + 1)
    },
    decrement () {
      this.$emit('update:score', this.score - 1)
    }
  }
})
</script>
