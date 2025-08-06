<script setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from 'stores/user-store'
import { watch } from 'vue'

const userStore = useUserStore()
const { t, locale } = useI18n()

watch(
  () => userStore.lang,
  (newLang) => {
    locale.value = newLang
  },
  { immediate: true }
)

function changeLang(lang) {
  userStore.setLang(lang)
}

</script>

<template>
  <q-page class="flex flex-center">
    <span>{{ t('title') }}</span>

    <q-list>
      <q-item clickable @click="changeLang('en-US')">
        <q-item-section>English</q-item-section>
      </q-item>
      <q-item clickable @click="changeLang('uk')">
        <q-item-section>Українська</q-item-section>
      </q-item>
    </q-list>

    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

