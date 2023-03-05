<script setup lang="ts">
import { ref } from 'vue'
import { useTodosStore } from '../../stores/todos'
const todosService = useTodosStore()
const newitem = ref('')
</script>

<template>
  <form
    class="form mt-3"
    @submit.prevent="
      todosService.addItem(newitem);
      newitem = ''
    "
  >
    <div class="field has-addons">
      <div class="my-2">
        <input
          type="text"
          id="newitem"
          name="newitem"
          placeholder="add a todo task"
          v-model="newitem"
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </div>
    </div>
    <button
      type="button"
      @click="todosService.clearAll()"
      class="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Clear all
    </button>
  </form>
</template>
