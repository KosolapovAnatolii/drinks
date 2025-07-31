<script setup>
import { useUserStore } from 'stores/user-store';

const userStore = useUserStore();
userStore.checkAuth()

</script>

<template>
  <router-view />
</template>
