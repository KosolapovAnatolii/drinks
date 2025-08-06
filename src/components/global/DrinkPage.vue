<script setup>
import { ref, onMounted } from 'vue'
import { getAllDrinks } from 'src/api/drinksApi';
import DrinkTable from 'src/components/global/DrinkTable.vue';
import AddDrinkDialog from 'src/components/global/AddDrinkDialog.vue';
import TopBar from 'src/components/global/TopBar.vue';

const pageProps = defineProps({
  drinkCategory: {
    type: String,
    required: true,
  }
})

const rows = ref([]);
const isDialogOpen = ref(false)

function openDialog() {
  isDialogOpen.value = true;
}

onMounted(async () => {
  try {
    const data = await getAllDrinks(pageProps.drinkCategory);
    rows.value = data;
  } catch (error) {
    console.error('Error loading drinks:', error);
  }
});
</script>

<template>
  <TopBar
    :title="drinkCategory"
    @open="openDialog"
  />

  <DrinkTable :rows="rows" />

  <AddDrinkDialog
    :category="drinkCategory"
    v-model="isDialogOpen"
  />
</template>
