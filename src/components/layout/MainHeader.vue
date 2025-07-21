<script setup>
import LoginButton from 'src/components/global/LogInButton.vue'

const routes = [
  {path: '/whiskey', label: 'Whiskey'},
  {path: '/rhum', label: 'Rhum'},
  {path: '/brandy', label: 'Brandy'},
  {path: '/cognac', label: 'Cognac'},
  {path: '/bourbon', label: 'Bourbon'},
];
</script>

<template>
  <q-header elevated bordered class="flex justify-between q-pa-sm">
    <q-btn
      to="/"
      color="grey-4"
      text-color="purple"
      icon="liquor"
      label="Home"
    />
    <nav class="q-gutter-sm">
      <q-btn
        v-for="link in routes"
        :key="link.path"
        color="deep-orange"
        glossy
        :label="link.label"
        :to="link.path"
      />
    </nav>
    <LoginButton />
  </q-header>
</template>

<style scoped lang="scss">

</style>
