<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

const todoItems: Ref<string[]> = ref([]);

todoItems.value.push("add todo");

onMounted(() => {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
        const key: string = localStorage.key(i) as string;
        todoItems.value.push(key);
      }
    }
  }
});
</script>

<template>
  <div class="todolist-container">
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">{{ todoItem }}</li>
    </ul>
  </div>
</template>
