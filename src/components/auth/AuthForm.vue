<script setup>
import { ref, computed } from 'vue'
import { registerUser, loginUser } from 'src/api/authApi'
import { useUserStore } from 'stores/user-store'
import { useCustomLinks } from 'src/composables/useLink'

const userStore = useUserStore();
const { goToPage } = useCustomLinks();

const isLogin = ref(true)
const isLoading = ref(false)
const userData = ref({
  email: '',
  password: '',
})

function toggleMode() {
  isLogin.value = !isLogin.value
}

async function handleSubmit() {
  if (isLogin.value) {
    try {
      isLoading.value = true;
      const response = await loginUser(userData.value)
      console.log('✅ User successfully logged in', response)
      userStore.logIn(response.token)
      isLoading.value = false;
      goToPage('home')
    } catch (err) {
      console.log(err)
      isLoading.value = false;
    }
  } else {
    try {
      isLoading.value = true;
      const response = await registerUser(userData.value);
      console.log('✅ User successfully registered:', response);
      userStore.logIn(response.token)
      isLoading.value = false;
      goToPage('home')
    } catch (err) {
      isLoading.value = false;
      console.log(err)
    }
  }
}

const toggleBtnLabel = computed(() => isLogin.value ? 'Switch to Register' : 'Switch to Login')
</script>

<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6 text-center">{{ isLogin ? 'Login' : 'Register' }}</div>
    </q-card-section>

    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-md">
        <q-input
          filled
          v-model="userData.email"
          type="email"
          label="Email"
          required
        />
        <q-input
          filled
          v-model="userData.password"
          type="password"
          label="Password"
          required
        />
      </q-card-section>

      <q-card-actions align="between">
        <q-btn
          color="primary"
          label="Submit"
          type="submit"
          :loading="isLoading"
        />
        <q-btn
          flat
          :label="toggleBtnLabel"
          @click="toggleMode"
          :disable="isLoading"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>
