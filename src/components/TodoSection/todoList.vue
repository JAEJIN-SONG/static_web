<script lang="ts" setup>
import type { todoitem } from "./todoSection.vue";

defineProps({
  todoItems: Array<todoitem>,
});

const emit = defineEmits(["removeTodo"]);

const removeTodo = (todoItem: todoitem) => {
  emit("removeTodo", todoItem);
};

const complete = function (todoItem: todoitem) {
  todoItem.isComplete = !todoItem.isComplete;
};

const completedLine = function (isChecked: boolean) {
  return isChecked ? "line-through" : "none";
};
</script>

<template>
  <div class="todolist-container">
    <ul>
      <li v-for="(todoItem, index) in todoItems" :key="`${index}`">
        <input
          type="checkbox"
          class="checkbox"
          v-bind:checked="todoItem.isComplete"
          @change="complete(todoItem)"
        />
        <span
          class="content"
          :style="{ textDecoration: completedLine(todoItem.isComplete) }"
          >{{ todoItem.text }}</span
        >
        <div class="remove-btn" @click="removeTodo(todoItem)">
          <i class="fa-solid fa-trash-can"></i>
        </div>
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
    padding: 0;
    li {
      display: flex;
      align-items: center;
      color: $fontColor;
      width: 400px;
      height: 40px;
      margin-top: 30px;
      background-color: white;
      border-radius: 12px;
      padding: 6px 20px;
      box-shadow: 0 5px 18px -16px rgb(0 0 0);

      .checkbox {
        margin-right: 10px;
      }
      .content {
        font-weight: 700;
        font-size: 30px;
      }
      .remove-btn {
        display: flex;
        margin-left: auto;
        color: $secondColor;
        cursor: pointer;

        transition-duration: 1s;

        &:hover {
          transform: scale(1.2);
        }
        i {
          font-size: 21px;
        }
      }
    }
  }
}
</style>
