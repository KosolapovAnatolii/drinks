<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
  },
  className: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <q-btn :class="className">
    <q-icon v-if="icon" left size="3em" :name="icon" />
    <span v-if="title">
      {{ title }}
    </span>
  </q-btn>
</template>

<style scoped lang="scss">

</style>
