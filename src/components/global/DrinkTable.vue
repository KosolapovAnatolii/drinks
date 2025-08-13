<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
const columns = [
  { name: 'img', label: t('table_head.photo'), field: 'img', required: false, align: 'center' },
  {
    name: 'name',
    required: true,
    label: t('table_head.name'),
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'age', align: 'center', label: t('table_head.age'), field: 'age', sortable: true },
  { name: 'strength', align: 'center', label: t('table_head.strength'), field: 'strength', sortable: true },
  { name: 'rating', align: 'center', label: t('table_head.rating'), field: 'rating', sortable: true },
  { name: 'description', align: 'center', label: t('table_head.noutes'), field: 'description', sortable: false, style: 'width: 25%', },
]

defineProps({
  rows: {
    type: Array,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false,
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
            v-if="props.row.photo"
            :src="props.row.photo"
            :alt="props.row.label"
            class="image"
          />
          <q-icon v-else name="local_bar" color="grey" size="32px" />
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
