<script setup>
import { useUserStore } from 'stores/user-store'
import { useQuasar } from 'quasar'
import { useCustomLinks } from 'src/composables/useLink'

const userStore = useUserStore();
const { goToPage } = useCustomLinks();
const isLoggedIn = userStore.isAutorised;

const $q = useQuasar();

function showConfirm() {
    $q.dialog({
    message: 'Are you sure you want to logout?',
    cancel: true,
    persistent: false
  }).onOk(() => {
    userStore.logOut()
    goToPage('auth')
  })
}

</script>

<template>
  <q-btn
    v-if="isLoggedIn"
    @click="showConfirm"
    color="grey-4"
    text-color="purple"
    glossy
    unelevated
  >
    <q-icon left size="2em" name="exit_to_app" />
    <span>
      Loguot
    </span>
  </q-btn>
  <q-btn
    v-else
    to="/auth"
    color="grey-4"
    text-color="purple"
    glossy
    unelevated
  >
    <q-icon
      left
      size="2em"
      name="person"
    />
    <span>
      Login
    </span>
  </q-btn>
</template>

<style scoped lang="scss">

</style>
