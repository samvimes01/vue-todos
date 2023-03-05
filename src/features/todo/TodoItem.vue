<script setup lang="ts">
import { ref, defineEmits } from 'vue'

defineProps(['item'])
const emit = defineEmits<{
  (event: 'remove', id: number): void
  (event: 'toggle', payload: boolean): void
  (event: 'edited', payload: string): void
}>()

// @ViewChild('itemLbl') lbl: ElementRef;

const editable = ref(false);
const lbl = ref<HTMLSpanElement>();

function onEdit(): void {
  emit('edited', lbl.value?.innerHTML ?? '');
  editable.value = false
}
</script>

<template>
  <div class="flex">
    <span
      class="item-label"
      ref="lbl"
      :class="{ done: item.isDone, editable }"
      v-bind:contenteditable="editable"
      @click="editable = true"
      >{{ item.label }}
    </span>
    <div class="flex">
      <button v-if="editable" @click="onEdit()" class="button is-ghost">✅</button>
      <button
        @click="
          editable = false;
          $emit('toggle', !item.isDone)
        "
        class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"
      >
        {{ item.isDone ? 'Uncheck' : 'Done' }}
      </button>
      <button
        @click="$emit('remove', item.id)"
        class="bg-amber-700 hover:bg-amber-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<style>
.item-label {
  cursor: pointer;
  min-width: 300px;
}

.item-label.done {
  color: gray;
  text-decoration: line-through;
}

.item-label.editable {
  border: 1px solid gray;
  cursor: text;
}
</style>
