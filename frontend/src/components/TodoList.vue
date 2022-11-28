<!-- <template>
    <h1>Todolist</h1>
    <todo-form @send-message="createTodo"></todo-form>
    <el-row>
        <el-col :span="12" :offset="7" style="width:100%"></el-col>
    </el-row>
    <el-table :data="todos">
        <el-table-column prop="title" label="Title" width="350" />
        <el-table-column fixed="right" label="Operations" width="200">
            <template #default="scope">
                <el-space wrap>
                    <el-switch v-model="scope.row.completed" @click="updateTodo(scope.row)" />
                    <el-popconfirm confirm-button-text="Yes" cancel-button-text="No" icon="el-icon-info"
                        icon-color="red" title="Are you sure?" @confirm="deleteTodo(scope.row)" @cancel="cancelDelete">
                        <template #reference>
                            <el-button size="mini" type="danger">
                                Delete
                            </el-button>

                        </template>
                    </el-popconfirm>
                </el-space>
            </template>
        </el-table-column>
    </el-table>
</template> -->
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
                        <input v-model="todo.completed" @click="updateTodo(todo.id)" type="checkbox" />
                    </td>
                    <td class="px-6 py-4">
                        <button @click="deleteTodo(todo.id)" type="submit"
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
import { loadTodos } from "@/api/loadTodos";
import type Todo from "@/api/types";
import { updateTodo } from '@/api/updateTodo'
import { deleteTodo } from '@/api/deleteTodo'

const cancelDelete = async () => {
    console.log("Cancel the delete");
};
</script>

<script lang="ts">
export default {
    name: "TodoList",
    data() {
        return {
            todos: [],
        };
    },
    async mounted() {
        try {
            const todos = await loadTodos();
            this.todos = todos;
        } catch (error) {
            throw new Error(`Backend is ${error}`);
        }
    },
};
</script>
