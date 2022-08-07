<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./layout/layoutHeader.vue";
const scrollHeight = ref(0);
const navStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(30px)",
};

function update() {
  scrollHeight.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", update);
});
onUnmounted(() => {
  window.removeEventListener("scroll", update);
});
</script>

<template>
  <div>
    <Navbar :style="[scrollHeight > 0 ? navStyle : '']" />
    <router-view />
  </div>
</template>

<style scoped></style>
