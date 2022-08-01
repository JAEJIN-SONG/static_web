<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";

const newTodoItem: Ref<string> = ref("");
const emit = defineEmits(["submit-item"]);

const submitTodo = () => {
  emit("submit-item", newTodoItem.value);
  newTodoItem.value = "";
};
</script>

<template>
  <div class="add-container">
    <div class="input-container">
      <div class="input-box">
        <input v-model="newTodoItem" />
        <button @click="submitTodo">add</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .input-container {
    display: flex;
    align-items: center;
    .input-box {
      input {
        border: none;
        font-size: 1rem;
        height: 50px;
        padding: 0;

        &:focus {
          outline: none;
        }
      }
      button {
        border: none;
        background-color: wheat;
        height: 50px;
        padding: 0;

        &:focus-visible {
          outline: 0;
        }
      }
    }
  }
}
</style>
