<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
</style>