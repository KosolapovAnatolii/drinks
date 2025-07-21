<template>
  <q-page class="q-pa-md">
    Whiskey
    <DrinkTable :rows="rows" title="Whiskey"/>
  </q-page>
</template>

<script setup>
import DrinkTable from 'src/components/global/DrinkTable.vue';

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
</script>
