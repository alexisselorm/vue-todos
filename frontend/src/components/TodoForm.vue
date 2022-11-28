<template>
    <!-- <el-form @submit.prevent :inline="true" :model="formInput" class="todo-form-input">
        <el-form-item label="Title" prop="title">
            <el-input v-model="formInput.title" placeholder="Enter Todo"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit()">Add</el-button>
        </el-form-item>
    </el-form> -->
    I'm a form
</template>

<script setup lang="ts">
import { loadTodos } from "@/api/loadTodos";

const formInput = {
    title: "",
    completed: false,
};
const onSubmit = () => {
    console.log(formInput);
};
</script>

<script lang="ts">
export default {
    name: "TodoForm",
    async mounted() {
        const todos = await loadTodos();
        console.log(todos);
    },
};
</script>
