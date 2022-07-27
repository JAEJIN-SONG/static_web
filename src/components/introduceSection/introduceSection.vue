<script lang="ts" setup></script>

<template>
  <section class="introduce-section">
    <div class="bg-container">
      <img src="src/assets/background-1.jpg" alt="background-1" />
    </div>
    <div class="content-container">
      <div class="text-area">
        <h1>똑똑해서 똑똑</h1>
        <div class="button-area"></div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-container {
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.bg-container img {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
  left: 0;
  right: 0;
}

.content-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.content-container .text-area {
  margin-top: 170px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.content-container .text-area h1 {
  width: 100%;
  text-align: center;
  font-size: 66px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 50px;
  word-break: keep-all;
  white-space: pre-wrap;
}
</style>
