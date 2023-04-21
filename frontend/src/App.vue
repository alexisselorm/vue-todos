<script setup lang="ts">
import { nextTick, ref } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import { loadTodos } from "@/api/loadTodos";



const renderComponent = ref(0)

const forceRerender = async () => {
  renderComponent.value += 1;

  await nextTick();

}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <TodoForm />
      <button class="px-8 py-2 ml-4 bg-yellow-400 border border-gray-400 rounded-2xl" @click="loadTodos()">Load
        Todos</button>
      <Suspense>
        <TodoList :key="renderComponent" />
      </Suspense>
    </div>
  </header>
</template>
