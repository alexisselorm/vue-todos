<script setup lang="ts">
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div>
      <TodoForm />
      <TodoList />
    </div>
  </header>
</template>
