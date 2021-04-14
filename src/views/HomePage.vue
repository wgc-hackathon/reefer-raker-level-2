<template>
  <Home msg="Reefer Raker" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/components/Home.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Home
  }
})
</script>