<script setup lang="ts">
import TodoList from '../features/todo/TodoList.vue'
import TodoFooter from '../features/todo/TodoFooter.vue'
import { useTodosStore } from '../stores/todos'

const todosService = useTodosStore()

function onSearch(event: Event): void {
  todosService.search = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="container mx-auto">
    <div class="field has-addons">
      <div class="control">
        <label for="search" class="label">Search </label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="search"
          @input="onSearch($event)"
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
    <h2 class="text-2xl my-2">Todo list</h2>
    <TodoList v-if="todosService.todos.length" />
    <p v-else>Congrats! You have no todos! Start adding some.</p>
    <TodoFooter />
  </div>
</template>
