<script lang="ts" setup>
const props = defineProps({
  todoItems: Array<string>,
});
</script>

<template>
  <div class="todolist-container">
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="`${index}`">
        {{ todoItem }}
      </li>
    </ul>
  </div>
</template>
