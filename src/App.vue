<script setup>
import { useUserStore } from 'stores/user-store'

const userStore = useUserStore();

// TODO: check why after reaload it's redirect to auth page, event if user logined
userStore.checkAuth()

</script>

<template>
  <router-view />
</template>
