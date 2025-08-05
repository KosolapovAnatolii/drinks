<template>
  <div class="row justify-between q-mb-md">
    <h1 class="no-margin text-h4 capitalize">{{ title }}</h1>
    <q-btn
      @click="$emit('open')"
      color="grey-4"
      text-color="purple"
      glossy
      unelevated
    >
      <q-icon left size="2em" name="add_circle" />
      <span>
        Add new drink
      </span>
    </q-btn>
  </div>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    }
  })

  defineEmits(['open'])
</script>

<style lang="css" scoped>
.capitalize {
  text-transform: capitalize;
}
</style>
