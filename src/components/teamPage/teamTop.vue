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
  </div>
</template>

<style lang="scss">
.team-container {
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("../../assets/team-1.jpeg");
  background-size: cover;
  .text-container {
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    position: absolute;
    margin-bottom: 247px;
    .transform-container {
      animation: riseUp 2s;
      // transform: translateY(10px);
      // opacity: 1;
      span {
        font-size: 72px;
        font-weight: 900;
        line-height: 93.6px;
        color: white;
        word-break: keep-all;
      }
    }
  }
}
</style>
