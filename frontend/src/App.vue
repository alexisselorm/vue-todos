<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import { loadTodos } from "@/api/loadTodos";



</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <TodoForm />
      <button class="px-8 py-2 ml-4 bg-yellow-400 border border-gray-400 rounded-2xl" @click="loadTodos()">Load
        Todos</button>
      <Suspense>
        <template #fallback>
          <div>loading</div>
        </template>
        <TodoList />
      </Suspense>
    </div>
  </header>
</template>
