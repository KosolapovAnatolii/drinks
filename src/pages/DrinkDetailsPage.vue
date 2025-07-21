<template>
  <q-page class="flex flex-center">
    <h1>Current Drink Page</h1>
    <p>{{ slug || 'no slug detected' }}</p>
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug;
</script>
