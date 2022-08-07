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
        <button @click="submitTodo">ADD</button>
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
    border-radius: 35px;
    box-shadow: 0 5px 18px -16px rgb(0 0 0);
    .input-box {
      input {
        border: none;
        font-size: 1rem;
        height: 50px;
        padding: 0;
        background: none;
        padding-left: 25px;

        &:focus {
          outline: none;
        }
      }
      button {
        font-weight: 700;
        border: none;
        color: #191f28;
        height: 50px;
        padding: 0 16px 0 15px;
        background: none;
        border-radius: 0 35px 35px 0;
        cursor: pointer;

        transition-property: background;
        transition-duration: 1s;

        &:focus-visible {
          outline: 0;
        }

        &:hover {
          background: #1a1a1a;
          border-radius: 0 35px 35px 0;
          color: white;
        }
      }
    }
  }
}
</style>
