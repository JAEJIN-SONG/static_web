<script lang="ts" setup>
import TodoAdd from "./todoAdd.vue";
import TodoList from "./todoList.vue";
import { ref } from "vue";
import type { Ref } from "vue";

let todolist: Ref<string[]> = ref([]);

const addTodo = function (newTodoItem: string) {
  todolist.value.push(newTodoItem);
};

const removeTodoFromList = function (todoItem: string) {
  todolist.value = todolist.value.filter((el) => el !== todoItem);
};

const clearAll = function () {
  todolist = [];
};
</script>

<template>
  <section class="todo-section">
    <div class="todo-container">
      <div class="todo-header">
        <h1>Todo List</h1>
      </div>
      <TodoAdd @submit-item="addTodo" />
      <TodoList :todoItems="todolist" @remove-todo="removeTodoFromList" />
      <div class="removeAll-container">
        <div class="removeAll">
          <span class="clearAllBtn" @click="clearAll">Clear All</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.todo-section {
  min-height: 500px;
  background: #f9fafb;
}
.todo-container {
  width: 100%;
  max-width: 1140px;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.todo-header {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.todo-header h1 {
  font-weight: 800;
  font-size: 40px;
}
</style>
