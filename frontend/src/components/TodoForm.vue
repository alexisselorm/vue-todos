<template>
    <form @submit.prevent :inline="true" :model="formInput" class="todo-form-input">
        <div class="mb-6">
            <label for="default-input" class="block mb-2 text-sm font-medium">Default input</label>
            <input type="text" v-model="formInput.title" id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <button class="px-8 py-2 ml-4 bg-green-400 border border-gray-400 rounded-2xl" @click="onSubmit()">Add</button>
    </form>
</template>

<script setup lang="ts">
import { createTodo } from '@/api/createTodo'
import { loadTodos } from '@/api/loadTodos'
const formInput = {
    title: '',
    completed: false,
}
const onSubmit = async () => {
    await createTodo({
        title: formInput.title,
        completed: false,
    })
    console.log(formInput)
    await loadTodos();
}
</script>

<script lang="ts">
export default {
    name: 'TodoForm',
}
</script>
