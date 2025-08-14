<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getDrinkBySlug, deleteDrink } from 'src/api/drinksApi';
import { useCustomLinks } from 'src/composables/useLink'
import DrinkDetailsSceleton from 'src/components/skeletons/DrinkDetailsSceleton.vue';

const route = useRoute()
const { goBack } = useCustomLinks()
const slug = route.params.slug;

const isLoading = ref(false);
const drinkData = ref(null);

// TODO: add markup for drink details and getDrinkBySlug function from api
onMounted(async () => {
  try {
    isLoading.value = true;
    const data = await getDrinkBySlug(slug);
    drinkData.value = data;
    console.log(drinkData.value)
    isLoading.value = false;
  } catch (error) {
    console.error('Error loading drinks:', error);
  } finally {
    isLoading.value = false;
  }
});

async function removeDrink() {
  isLoading.value = true;
  const deletedDrink = await deleteDrink(slug);
  console.log(deletedDrink);
  goBack()
  isLoading.value = false;
}
</script>

<template>
  <q-page class="q-pa-lg">
    <q-card v-if="!isLoading && drinkData" flat bordered class="q-pa-md drink-card">
      <q-btn
        flat
        label="Delete drink"
        @click="removeDrink"
      />
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-5 flex flex-center">
          <q-img
            v-if="drinkData.photo"
            :src="drinkData.photo"
            :alt="drinkData.name"
            style="max-height: 600px;"
            fit="contain"
          />
          <q-icon v-else name="local_bar" color="grey" size="64px" />
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-h4 q-mb-sm">{{ drinkData.name }}</h2>
          <p class="text-subtitle1 text-grey-7 q-mb-md">{{ drinkData.category }}</p>

          <div class="q-mb-md">
            <strong>Age:</strong> {{ drinkData.age }} years
          </div>
          <div class="q-mb-md">
            <strong>Strength:</strong> {{ drinkData.strength }}%
          </div>
          <div class="q-mb-md">
            <strong>Rating:</strong> {{ drinkData.rating }}/100
          </div>
          <div>
            <strong>Description:</strong>
            <p>{{ drinkData.description }}</p>
          </div>
        </div>
      </div>
    </q-card>

    <DrinkDetailsSceleton v-else />
  </q-page>
</template>
