<script setup>
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'
import { useValidationRules } from 'src/composables/useValidation'
import { createDrink } from 'src/api/drinksApi'

const { requireFieldRule, validRaitingMark, validFileSize } = useValidationRules();
const { t } = useI18n();

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

const emit = defineEmits(['update:modelValue', 'reloadDrinks'])

const modelValueLocal = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const isLoading = ref(false);

const drinkData = ref({
  category: props.category,
  photo: null,
  name: '',
  age: null,
  strength: null,
  rating: null,
  description: '',
})

function closeDialog() {
  emit('update:modelValue', false)
}

async function handleSubmit() {
  const formData = new FormData();
  formData.append('category', drinkData.value.category);
  formData.append('name', drinkData.value.name);
  formData.append('age', drinkData.value.age);
  formData.append('strength', drinkData.value.strength);
  formData.append('rating', drinkData.value.rating);
  formData.append('description', drinkData.value.description);

  if (drinkData.value.photo) {
    formData.append('photo', drinkData.value.photo);
  }

  isLoading.value = true;
  await createDrink(formData);
  isLoading.value = false;

  closeDialog()
  emit('reloadDrinks');
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
            :label="t('drink_form.add_photo')"
            :validate="[validFileSize]"
            accept=".jpg,.jpeg,.png,.webp"
          >
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
          </q-file>

          <q-input
            filled
            v-model.trim="drinkData.name"
            type="text"
            :label="t('drink_form.title')"
            required
            :validate="[requireFieldRule]"
          />

          <q-input
            filled
            v-model="drinkData.age"
            type="number"
            :label="t('drink_form.age')"
          />

          <q-input
            filled
            v-model="drinkData.strength"
            type="number"
            :label="t('drink_form.strength')"
          />

          <q-input
            filled
            v-model="drinkData.rating"
            type="number"
            :label="t('drink_form.rating')"
            :rules="[validRaitingMark]"
          />

          <q-input
            filled
            v-model.trim="drinkData.description"
            type="text"
            :label="t('drink_form.description')"
          />

          <q-card-actions align="between">
            <q-btn
              color="primary"
              :label="t('buttons.submit')"
              type="submit"
              :loading="isLoading"
            />
            <q-btn
              flat
              :label="t('buttons.cancel')"
              @click="closeDialog"
              :disable="isLoading"
            />
          </q-card-actions>
        </q-card-section>
      </q-form>
    </q-card>
  </q-dialog>

</template>

