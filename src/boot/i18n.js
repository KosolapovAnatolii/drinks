import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { useUserStore } from 'stores/user-store'

export default defineBoot(({ app }) => {
  const userStore = useUserStore()

  userStore.checkLang()

  const i18n = createI18n({
    locale: userStore.lang || 'en-US',
    globalInjection: true,
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})
