<script lang="ts" setup>
function scrollDown() {
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
}
</script>

<template>
  <div class="team-container">
    <div class="text-container">
      <div class="transform-container">
        <span
          >임시 페이지 <br />
          테스트용 제작입니다
        </span>
      </div>
    </div>
    <div class="arrow-container">
      <img
        src="@/assets/team/down-arrow.png"
        alt="down-arrow"
        @click="scrollDown"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-container {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("../../assets/team/team-1.jpeg");
  background-size: cover;
  background-position: center center;
  .text-container {
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    position: absolute;
    margin-bottom: 247px;
    .transform-container {
      animation: riseUp 1s;
      span {
        font-size: 72px;
        font-weight: 900;
        line-height: 93.6px;
        color: white;
        word-break: keep-all;
      }
    }
  }
  .arrow-container {
    position: absolute;
    bottom: 97px;
    img {
      width: 28px;
      cursor: pointer;
      animation: sway 2s infinite;
    }
  }
}
</style>
