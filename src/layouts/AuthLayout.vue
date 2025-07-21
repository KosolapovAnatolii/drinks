<template>
  <q-layout view="lHh Lpr lFf">

    <AuthHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <the-footer />
  </q-layout>
</template>

<script setup>
import TheFooter from 'src/components/layout/TheFooter.vue'
import AuthHeader from 'src/components/layout/AuthHeader.vue'

</script>
