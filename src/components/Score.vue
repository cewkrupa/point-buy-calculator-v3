<template>
  <div class="level">
    <div class="level-item score">
      {{score}}
    </div>
    <div class="level-item score-controls">
      <button @click="increment" class="score-increment button">
        +
      </button>
      <button @click="decrement" class="score-decrement button">
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
