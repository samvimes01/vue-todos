import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useTodosStore = defineStore('todos', {
  state: () => {
    return { todos: [], search: '' }
  },
  getters: {
    getList: (state) => state.todos,
    getFilteredList: (state) =>
      state.search ? state.todos.filter((item) => item.label.includes(state.search)) : state.todos
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
