<script lang="ts" setup>
import TodoAdd from "./todoAdd.vue";
import TodoList from "./todoList.vue";
import { ref } from "vue";
import type { Ref } from "vue";

export interface todoitem {
  text: string;
  isComplete: boolean;
}

const todolist: Ref<todoitem[]> = ref([
  { text: "늦게 출근하기", isComplete: true },
  { text: "일찍 퇴근하기", isComplete: false },
  { text: "둘 중에 선택은?", isComplete: false },
]);

const addTodo = function (newTodoItem: string) {
  todolist.value.push({ text: newTodoItem, isComplete: false });
};

const removeTodoFromList = function (todoItem: todoitem) {
  todolist.value = todolist.value.filter((el) => el !== todoItem);
};

const clearAll = function () {
  todolist.value = [];
};
</script>

<template>
  <section class="todo-section">
    <div class="todo-container">
      <div class="todo-header">
        <h1>TODO LIST</h1>
      </div>
      <TodoAdd @submit-item="addTodo" />
      <!-- <TodoList :todoItems="todolist" @remove-todo="removeTodoFromList" /> -->
      <TodoList :todo-items="todolist" @remove-todo="removeTodoFromList" />
      <div class="removeAll-container">
        <div class="removeAll">
          <span class="clearAllBtn" @click="clearAll">CLEAR ALL</span>
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

.removeAll-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 30px 0;
}

.removeAll-container .removeAll {
  display: flex;
  margin: 0 auto;
  width: 300px;
  height: 50px;
  justify-content: center;
  align-items: center;
}

.removeAll-container .removeAll .clearAllBtn {
  background-color: white;
  border-radius: 12px;
  padding: 6px 20px 2px 20px;
  font-weight: 700;
  font-size: 28px;
  color: #191f28;
  box-shadow: 0 5px 18px -16px rgb(0 0 0);

  transition-duration: 1s;
}

.removeAll-container .removeAll .clearAllBtn:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
