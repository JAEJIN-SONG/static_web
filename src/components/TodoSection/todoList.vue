<script lang="ts" setup>
const props = defineProps({
  todoItems: Array<string>,
});

const emit = defineEmits(["removeTodo"]);

const removeTodo = (todoItem: string) => {
  emit("removeTodo", todoItem);
};
</script>

<template>
  <div class="todolist-container">
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="`${index}`">
        {{ todoItem }}
        <span class="remove-btn" @click="removeTodo(todoItem)">
          <i class="fa-solid fa-trash-can"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
$fontColor: #191f28;
$secondColor: #3182f6;
.todolist-container {
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    // background-color: aquamarine;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      // background-color: #191f28;
      color: $fontColor;
      width: 400px;
      height: 40px;
      margin-top: 30px;
      font-weight: 700;
      font-size: 30px;
      background-color: white;
      border-radius: 5px;
      padding: 6px 18px;
      .remove-btn {
        margin-left: auto;
        color: $secondColor;
      }
    }
  }
}
</style>
