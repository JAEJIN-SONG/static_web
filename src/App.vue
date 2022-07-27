<script setup lang="ts">
import Navbar from "./layout/layoutHeader.vue";
import IntroudceSection from "./components/introduceSection/introduceSection.vue";
import TodoSection from "./components/TodoSection/todoSection.vue";
</script>

<template>
  <Navbar />
  <main>
    <IntroudceSection />
    <TodoSection />
  </main>
</template>

<style scoped></style>
