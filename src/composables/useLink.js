import { useRouter } from 'vue-router'

export function useCustomLinks() {
  const router = useRouter()

  function getCurrentRoute() {
    return router.currentRoute.value.path
  }

  // Navigate to page
  const goToPage = (namePage) => {
    router.push({ name: namePage })
  }

  return {
    getCurrentRoute,
    goToPage,
  }
}
