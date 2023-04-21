<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">TODO TITLE</th>
                    <th scope="col" class="px-6 py-3">DONE?</th>
                    <th scope="col" class="px-6 py-3">DELETE</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id" class="">
                    <th scope="row" class="px-6 py-4 font-medium">
                        {{ todo.title }}
                    </th>
                    <td class="px-6 py-4">
                        <input v-model="todo.completed" @click="updateTodo(todo)" type="checkbox"
                            :checked="!!(todo.completed)" />
                    </td>
                    <td class="px-6 py-4">
                        <button @click="deleteTodo(todo)" type="submit"
                            class="p-1 text-red-500 bg-red-200 border border-red-600 rounded-full">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<!-- <template>
    {{ todos }}
</template> -->
<script setup lang="ts">
import { reactive } from "vue";
import { loadTodos } from "@/api/loadTodos";
import { updateTodo } from '@/api/updateTodo'
import { deleteTodo } from '@/api/deleteTodo'



let todos = reactive(await loadTodos())


</script>