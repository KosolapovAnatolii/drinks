<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
  <q-header elevated bordered class="flex justify-between q-pa-sm">
    <q-btn
      to="/"
      color="grey-4"
      text-color="purple"
      icon="liquor"
      :label="t('header.home')"
    />
  </q-header>
</template>
