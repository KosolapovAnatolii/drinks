<script setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from 'stores/user-store'
import { useQuasar } from 'quasar'
import { useCustomLinks } from 'src/composables/useLink'

const userStore = useUserStore();
const { goToPage } = useCustomLinks();
const { t } = useI18n();
const $q = useQuasar();

const isLoggedIn = userStore.isAutorised;

function showConfirm() {
  $q.dialog({
    message: t('confarm.logout_msg'),
    ok: {
      label: t('buttons.ok')
    },
    cancel: {
      label: t('buttons.cancel')
    },
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
      {{ t('header.logout') }}
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
      {{ t('header.login') }}
    </span>
  </q-btn>
</template>

<style scoped lang="scss">

</style>
