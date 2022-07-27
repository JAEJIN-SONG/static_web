<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";

const props = defineProps({
  todoItems: string[];

});

// todoItems.value.push("add todo");
</script>

<template>
  <div class="todolist-container">
    <ul>
      <li v-for="todoItem in todoItems" :key="todoItem">{{ todoItem }}</li>
    </ul>
  </div>
</template>
