<script setup>
import { useI18n } from 'vue-i18n'
import LoginButton from 'src/components/global/LogInButton.vue'

const { t } = useI18n()

const routes = ['whiskey', 'rhum', 'brandy', 'cognac', 'bourbon'];
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
        :key="link"
        color="deep-orange"
        glossy
        :label="t(`categories.${link}`)"
        :to="`/${link}`"
      />
    </nav>
    <LoginButton />
  </q-header>
</template>

<style scoped lang="scss">

</style>
