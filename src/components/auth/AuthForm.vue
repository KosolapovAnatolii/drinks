<template>
  <q-card class="q-pa-md">
    <q-card-section>
      <div class="text-h6 text-center">{{ isLogin ? 'Login' : 'Register' }}</div>
    </q-card-section>

    <q-form @submit.prevent="handleSubmit">
      <q-card-section class="q-gutter-md">
        <q-input
          filled
          v-model="email"
          type="email"
          label="Email"
          required
        />
        <q-input
          filled
          v-model="password"
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
        />
        <!-- <q-btn
          color="deep-orange"
          glossy
          :label="link.label"
          :to="link.path"
        /> -->
        <q-btn
          flat
          :label="toggleBtnLabel"
          @click="toggleMode"
        />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script setup>
import { ref, computed } from 'vue'
// import { useQuasar } from 'quasar'
import axios from 'axios'

// const $q = useQuasar()

const isLogin = ref(true)
const email = ref('')
const password = ref('')

function toggleMode() {
  isLogin.value = !isLogin.value
}

async function handleSubmit() {
  try {
    const url = isLogin.value ? '/login' : '/register'
    const payload = {
      email: email.value,
      password: password.value
    }

    const response = await axios.post(url, payload)
    // $q.notify({
    //   type: 'positive',
    //   message: isLogin.value ? 'Logged in!' : 'Registered successfully!'
    // })

    console.log(response.data)
  } catch (err) {
    console.log(err)
    // $q.notify({
    //   type: 'negative',
    //   message: err.response?.data?.error || 'Something went wrong'
    // })
  }
}

const toggleBtnLabel = computed(() => isLogin.value ? 'Switch to Register' : 'Switch to Login')
</script>
