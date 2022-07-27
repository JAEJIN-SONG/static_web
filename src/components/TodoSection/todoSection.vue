<script lang="ts" setup>
import TodoAdd from "./todoAdd.vue";
import TodoList from "./todoList.vue";
</script>

<template>
  <section class="todo-section">
    <div class="todo-container">
      <div class="todo-header">
        <h1>To Do List</h1>
      </div>
      <TodoAdd />
      <TodoList />
    </div>
  </section>
</template>

<style scoped>
.todo-container {
  width: 100%;
  max-width: 1140px;
  background-color: antiquewhite;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.todo-header {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
