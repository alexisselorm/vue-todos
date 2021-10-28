<template>
    <h1>Todolist</h1>
    <todo-form @send-message="createTodo"></todo-form>
    <el-row>
        <el-col :span="12" :offset="7" style="width:100%"></el-col>
    </el-row>
    <el-table :data="todos">
        <el-table-column prop="title" label="Title" width="350"/>
        <el-table-column fixed="right" label="Operations" width="200">
            <template #default="scope">
                <el-space wrap>
                    <el-switch
                    v-model="scope.row.completed"
                    @click="updateTodo(scope.row)"
                    />
                    <el-popconfirm confirm-button-text="Yes"
                    cancel-button-text="No"
                    icon="el-icon-info"
                    icon-color="red"
                    title="Are you sure?"
                    @confirm="deleteTodo(scope.row)"
                    @cancel="cancelDelete">
                    <template #reference>
                        <el-button size="mini"
                        type="danger">
                            Delete
                        </el-button>

                    </template>
                    </el-popconfirm>
                </el-space>
            </template>
        </el-table-column>
    </el-table>

</template>

<script lang="ts">
import { ElMessage } from 'element-plus';
import { Options, Vue } from 'vue-class-component';
import TodoForm from './TodoForm.vue';

interface Todo{
    id:number;
    title: string;
    completed:boolean;
}

@Options({
    components:{
        TodoForm,
    }
})
export default class TodoList extends Vue {
    todos :any=[];
    async mounted(){
        await this.loadTodos();
    }
    async loadTodos(){
        const response = await this.axios.get(`http://127.0.0.1:8000/api/todos`);
        this.todos = response.data;
    }
    async createTodo(todo: any){
        console.log('Todo', todo);
        await this.axios.post(`http://127.0.0.1:8000/api/todos`, {
            title: todo.title,
            completed: todo.completed
        })
        ElMessage({
            message: "Todo created",
            type:'success'
        });
        await this.loadTodos();
    }

    async updateTodo(todo: Todo){
        console.log('Todo', todo);
        await this.axios.put(`http://127.0.0.1:8000/api/todos/${todo.id}`, {
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        })
        ElMessage({
            message: "Todo updated",
            type:'success'
        });
        // await this.loadTodos();
    }
    async deleteTodo(todo:Todo){
        await this.axios.delete(`http://127.0.0.1:8000/api/todos/${todo.id}`);
        ElMessage({
            message: "Todo deleted",
            type:'success'
        });
        await this.loadTodos();
    }
    async cancelDelete(){
        console.log("Cancel the delete")
    }
    
}
</script>