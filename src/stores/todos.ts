import { ref, computed, effect } from 'vue'
import { defineStore } from 'pinia'
import type { TodoItem } from './model'

export const useTodosStore = defineStore('todos', () => {
  let savedTodos: TodoItem[];
  try {
    savedTodos = JSON.parse(localStorage.getItem('tdl_todos') || '[]') as TodoItem[];
  } catch (error) {
    savedTodos = [];
  }
  const todos = ref(savedTodos);
  const search = ref('')

  const filteredTodos = computed(() =>
    search.value ? todos.value.filter((item) => item.label.includes(search.value)) : todos.value
  )
  const storeEffect = effect(() => {
    let str = '';
    try {
      str = JSON.stringify(todos.value);
    } catch (error) {
      return str;
    }
    localStorage.setItem('tdl_todos', str);
    return str;
  })

  function addItem(label: string, generator = Math.random): void {
    const id = generator()
    todos.value = todos.value.concat({ id, label, isDone: false })
  }

  function editItem(itemId: number, label: string): void {
    todos.value = todos.value.map((item) => (item.id === itemId ? { ...item, label } : item))
  }

  function toggleItem(itemId: number, isDone: boolean): void {
    todos.value = todos.value.map((item) => (item.id === itemId ? { ...item, isDone } : item))
  }

  function removeItem(itemId: number): void {
    todos.value = todos.value.filter((item) => item.id !== itemId)
  }

  function clearAll(): void {
    todos.value = [];
  }

  return { todos, search, filteredTodos, storeEffect, addItem, editItem, toggleItem, removeItem, clearAll }
})
