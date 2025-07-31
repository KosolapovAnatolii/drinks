<script setup>
import { ref } from 'vue'

import DrinkTable from 'src/components/global/DrinkTable.vue';
import AddDrinkDialog from 'src/components/global/AddDrinkDialog.vue';

const rows = [
  {
    img: "https://static.whiskybase.com/storage/whiskies/5/4/927/101547-normal.png",
    name: 'Bowmore 12',
    age: 12,
    strength: 40,
    rating: 79,
    slug: 'bowmore-12',
    category: 'whiskey',
    description: 'Tarry ropes and seashore, with a bit of peaches and some wallet leather. The nose is bold, greasily sooty, and nicely "together" without any out of place scents.'
  },
  {
    img: null,
    name: 'Bowmore 12',
    age: 12,
    strength: 40,
    rating: 79,
    slug: 'bowmore-12',
    category: 'whiskey',
  },
  {
    img: null,
    name: 'Bowmore 12',
    age: 12,
    strength: 40,
    rating: 79,
    slug: 'bowmore-12',
    category: 'whiskey',
  },
  {
    img: null,
    name: 'Bowmore 12',
    age: 12,
    strength: 40,
    rating: 79,
    slug: 'bowmore-12',
    category: 'whiskey',
  },
  {
    img: null,
    name: 'Bowmore 12',
    age: 12,
    strength: 40,
    rating: 79,
    slug: 'bowmore-12',
    category: 'whiskey',
  },
]

const isDialogOpen = ref(false)
function openDialog() {
  isDialogOpen.value = true;
  console.log('open dialog func', isDialogOpen.value)
}
</script>

<template>
  <q-page class="q-pa-md">
    <div class="row justify-between q-mb-md">
      <h1 class="no-margin text-h4">Whiskey</h1>
      <q-btn
        @click="openDialog"
        color="grey-4"
        text-color="purple"
        glossy
        unelevated
      >
        <q-icon left size="2em" name="add_circle" />
        <span>
          Add new drink
        </span>
      </q-btn>
    </div>
    <DrinkTable :rows="rows" />
    <AddDrinkDialog category="whiskey" v-model="isDialogOpen" />
  </q-page>
</template>
