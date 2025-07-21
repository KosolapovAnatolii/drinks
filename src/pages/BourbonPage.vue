<template>
  <q-page class="flex flex-center">
    Bourbon
    <q-btn
      @click="sendData"
      color="grey-4"
      text-color="purple"
      icon="liquor"
      label="Send request"
    />
  </q-page>
</template>

<script setup>
// async function registerUser() {
//   console.log('sending...')
//   try {
//     const response = await fetch('http://localhost:5000/api/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       credentials: 'include',
//       body: JSON.stringify({
//         email: 'test@example.com',
//         password: '123456',
//       }),
//     });

//     const data = await response.json();
//     console.log('📨 Ответ от сервера:', data);

//     if (!response.ok) {
//       console.error('❌ Ошибка регистрации:', data.error);
//     }
//   } catch (err) {
//     console.error('⚠️ Ошибка сети:', err);
//   }
// }

async function sendData() {
  try {
    const response = await fetch('http://localhost:5000/api/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ msg: 'Привіт з фронта!' })
    });

    const data = await response.json();
    console.log('✅ Відповідь:', data);
  } catch (err) {
    console.error('❌ Помилка:', err);
  }
}
</script>
