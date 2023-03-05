<script setup lang="ts">
import TodoItem from './TodoItem.vue'
import { useTodosStore } from '../../stores/todos'
const todosService = useTodosStore()
</script>

<template>
  <div class="mb-2" v-for="item in todosService.filteredTodos" :key="item.id">
    <TodoItem
      :item="item"
      @toggle="todosService.toggleItem(item.id, $event)"
      @remove="todosService.removeItem($event)"
      @edited="todosService.editItem(item.id, $event)"
    ></TodoItem>
  </div>
</template>
