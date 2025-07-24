<template>
  <q-page class="flex flex-center">
    Bourbon
    <span v-if="isLoading">Load data</span>
    <q-btn
      @click="registerUser"
      color="grey-4"
      text-color="purple"
      icon="liquor"
      label="Send request"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);

async function registerUser() {
  isLoading.value = true;
  console.log('sending...')
  try {
    const response = await fetch('https://drinks-backend-x4zi.onrender.com/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        email: 'test@example.com',
        password: '123456',
      }),
    });

    const data = await response.json();
    console.log('📨 Response from server:', data);

    if (!response.ok) {
      console.error('❌ Registration failed:', data.error);
    }
  } catch (err) {
    console.error('⚠️ Network err', err);
  }

  isLoading.value = false;
}

// async function sendData() {
//   isLoading.value = true;
//   try {
//     const response = await fetch('https://drinks-backend-x4zi.onrender.com/api/auth/test', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       credentials: 'include',
//       body: JSON.stringify({ msg: 'Привіт з фронта!' })
//     });

//     const data = await response.json();
//     console.log('✅ Відповідь:', data);
//   } catch (err) {
//     console.error('❌ Помилка:', err);
//   }

//   isLoading.value = false;
// }
</script>
