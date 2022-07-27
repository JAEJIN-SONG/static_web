<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";

const newTodoItem: Ref<string> = ref("");

const addTodo = () => {
  localStorage.setItem(newTodoItem.value, newTodoItem.value);
  newTodoItem.value = "";
};
</script>

<template>
  <div class="add-container">
    <div class="input-container">
      <input v-model="newTodoItem" />
      <button @click="addTodo">add</button>
    </div>
  </div>
</template>

<style scoped>
.add-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
