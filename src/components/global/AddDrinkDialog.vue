<script setup>
import { ref, computed } from 'vue'
import { useValidationRules } from 'src/composables/useValidation'
import { createDrink } from 'src/api/drinksApi'
const { requireFieldRule, validRaitingMark, validFileSize } = useValidationRules()

const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const modelValueLocal = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

function closeDialog() {
  emit('update:modelValue', false)
}

const drinkData = ref({
  category: props.category,
  photo: null,
  name: '',
  age: null,
  strength: null,
  rating: null,
  description: '',
})

function handleSubmit() {
  console.log(drinkData.value)
  createDrink(drinkData.value)
  closeDialog()
}
</script>

<template>
  <q-dialog
    v-model="modelValueLocal"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="q-pa-md" style="width: 100%; max-width: 600px;">
      <q-form @submit.prevent="handleSubmit">
        <q-card-section class="q-gutter-md">
          <q-file
            color="purple-12"
            v-model="drinkData.photo"
            label="Add photo"
            :validate="[validFileSize]"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>

          <q-input
            filled
            v-model.trim="drinkData.name"
            type="text"
            label="Title"
            required
            :validate="[requireFieldRule]"
          />

          <q-input
            filled
            v-model="drinkData.age"
            type="number"
            label="Age (years)"
          />

          <q-input
            filled
            v-model="drinkData.strength"
            type="number"
            label="Strength(%)"
          />

          <q-input
            filled
            v-model="drinkData.rating"
            type="number"
            label="Rating (0-100)"
            :rules="[validRaitingMark]"
          />

          <q-input
            filled
            v-model.trim="drinkData.description"
            type="text"
            label="Description"
          />
          <q-card-actions align="between">
            <q-btn
              color="primary"
              label="Submit"
              type="submit"
            />
            <q-btn
              flat
              label="Cancel"
              @click="closeDialog"
            />
          </q-card-actions>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>

</template>

