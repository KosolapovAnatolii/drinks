<script setup>
const columns = [
  { name: 'img', label: 'Photo', field: 'img', required: false },
  {
    name: 'name',
    required: true,
    label: 'Relise name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'age', align: 'center', label: 'Age (years)', field: 'age', sortable: true },
  { name: 'strength', align: 'center', label: 'Strength (%)', field: 'strength', sortable: true },
  { name: 'rating', align: 'center', label: 'Rating', field: 'rating', sortable: true },
  { name: 'description', align: 'center', label: 'Degustation noutes', field: 'description', sortable: false, style: 'width: 25%', },
]

defineProps({
  rows: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

</script>
<template>
  <div class="q-pa-xs" style="overflow: auto;">
    <q-table
      hide-bottom
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template #body-cell-img="props">
        <q-td :props="props">
          <img
            v-if="props.row.img"
            :src="props.row.img"
            :alt="props.row.label"
            class="image"
          />
          <q-icon v-else name="image_not_supported" color="grey" />
        </q-td>
      </template>
      <template #body-cell-name="props">
        <q-td :props="props">
          <router-link :to="`/${props.row.category}/${props.row.slug}`">{{ props.row.name }}</router-link>
        </q-td>
      </template>
      <template #body-cell-description="props">
        <q-td :props="props" class="notes">
          {{ props.row.description }}
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<style lang="css" scoped>
.image {
  width: auto;
  height: auto;
  max-height: 120px;
  max-width: 120px;
  object-fit: cover;
}

.notes {
  white-space: wrap;
  text-align: left;
  line-height: 150%;
}
</style>
