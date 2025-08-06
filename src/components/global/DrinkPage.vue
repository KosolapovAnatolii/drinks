<script setup>
import { ref, onMounted } from 'vue'
import { getAllDrinks } from 'src/api/drinksApi';
import DrinkTable from 'src/components/global/DrinkTable.vue';
import AddDrinkDialog from 'src/components/global/AddDrinkDialog.vue';
import TopBar from 'src/components/global/TopBar.vue';
import TableSkeleton from 'src/components/skeletons/TableSkeleton.vue';

const pageProps = defineProps({
  drinkCategory: {
    type: String,
    required: true,
  }
})

const rows = ref([]);
const isDialogOpen = ref(false)
const isLoading = ref(true)

function openDialog() {
  isDialogOpen.value = true;
}

onMounted(async () => {
  try {
    isLoading.value = true;
    const data = await getAllDrinks(pageProps.drinkCategory);
    rows.value = data;
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading drinks:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <TopBar
    :title="drinkCategory"
    @open="openDialog"
  />

  <TableSkeleton v-if="isLoading" />

  <DrinkTable v-else :rows="rows" :isLoading="isLoading" />

  <AddDrinkDialog
    :category="drinkCategory"
    v-model="isDialogOpen"
  />
</template>
