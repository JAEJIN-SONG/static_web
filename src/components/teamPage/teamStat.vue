<script lang="ts" setup></script>

<template>
  <div class="teamStat-container">
    <div class="bg-container">
      <svg
        viewBox="0 0 500 500"
        width="100%"
        height="100%"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="193.01%">
            <stop offset="23.41%" stop-color="rgba(49, 130, 246, 0.4)"></stop>
            <stop offset="50%" stop-color="rgba(18, 20, 23, 0.4)"></stop>
          </linearGradient>
        </defs>
        <g>
          <path
            class="chart-fill"
            d="M 0,500 C 1.5,498.5 7.75,491.5 10,490 C 12.25,488.5 12.75,490.75 15,490 C 17.25,489.25 22.75,486.5 25,485 C 27.25,483.5 27.75,480 30,480 C 32.25,480 37,485 40,485 C 43,485 47,480.9 50,480 C 53,479.1 56.25,480.875 60,479 C 63.75,477.125 70.5,468.85 75,467.5 C 79.5,466.15 86.25,470.75 90,470 C 93.75,469.25 96.25,464.225 100,462.5 C 103.75,460.775 111.25,460.375 115,458.5 C 118.75,456.625 121.25,452.025 125,450 C 128.75,447.975 136.25,447.25 140,445 C 143.75,442.75 146.25,436.875 150,435 C 153.75,433.125 161.25,433.4 165,432.5 C 168.75,431.6 171.25,430.275 175,429 C 178.75,427.725 186.25,426.1 190,424 C 193.75,421.9 196.25,416.725 200,415 C 203.75,413.275 211.25,412.05 215,412.5 C 218.75,412.95 221.25,418.375 225,418 C 228.75,417.625 236.25,411.95 240,410 C 243.75,408.05 246.25,410.25 250,405 C 253.75,399.75 261.25,381.75 265,375 C 268.75,368.25 271.25,366 275,360 C 278.75,354 286.25,341 290,335 C 293.75,329 296.25,323 300,320 C 303.75,317 311.25,316.5 315,315 C 318.75,313.5 321.25,315.25 325,310 C 328.75,304.75 336.25,289 340,280 C 343.75,271 346.25,255.625 350,250 C 353.75,244.375 361.25,245.5 365,242.5 C 368.75,239.5 371.25,231.125 375,230 C 378.75,228.875 386.25,237.25 390,235 C 393.75,232.75 396.25,220.25 400,215 C 403.75,209.75 411.25,203.75 415,200 C 418.75,196.25 421.25,192.25 425,190 C 428.75,187.75 436.25,188 440,185 C 443.75,182 446.25,173 450,170 C 453.75,167 461.25,168.75 465,165 C 468.75,161.25 471.25,150.25 475,145 C 478.75,139.75 486.25,133 490,130 C 493.75,127 498.5,125.75 500,125 L 500 500 L 0 500 L 0,500"
          ></path>
          <path
            class="chart-line"
            d="M 0,500 C 1.5,498.5 7.75,491.5 10,490 C 12.25,488.5 12.75,490.75 15,490 C 17.25,489.25 22.75,486.5 25,485 C 27.25,483.5 27.75,480 30,480 C 32.25,480 37,485 40,485 C 43,485 47,480.9 50,480 C 53,479.1 56.25,480.875 60,479 C 63.75,477.125 70.5,468.85 75,467.5 C 79.5,466.15 86.25,470.75 90,470 C 93.75,469.25 96.25,464.225 100,462.5 C 103.75,460.775 111.25,460.375 115,458.5 C 118.75,456.625 121.25,452.025 125,450 C 128.75,447.975 136.25,447.25 140,445 C 143.75,442.75 146.25,436.875 150,435 C 153.75,433.125 161.25,433.4 165,432.5 C 168.75,431.6 171.25,430.275 175,429 C 178.75,427.725 186.25,426.1 190,424 C 193.75,421.9 196.25,416.725 200,415 C 203.75,413.275 211.25,412.05 215,412.5 C 218.75,412.95 221.25,418.375 225,418 C 228.75,417.625 236.25,411.95 240,410 C 243.75,408.05 246.25,410.25 250,405 C 253.75,399.75 261.25,381.75 265,375 C 268.75,368.25 271.25,366 275,360 C 278.75,354 286.25,341 290,335 C 293.75,329 296.25,323 300,320 C 303.75,317 311.25,316.5 315,315 C 318.75,313.5 321.25,315.25 325,310 C 328.75,304.75 336.25,289 340,280 C 343.75,271 346.25,255.625 350,250 C 353.75,244.375 361.25,245.5 365,242.5 C 368.75,239.5 371.25,231.125 375,230 C 378.75,228.875 386.25,237.25 390,235 C 393.75,232.75 396.25,220.25 400,215 C 403.75,209.75 411.25,203.75 415,200 C 418.75,196.25 421.25,192.25 425,190 C 428.75,187.75 436.25,188 440,185 C 443.75,182 446.25,173 450,170 C 453.75,167 461.25,168.75 465,165 C 468.75,161.25 471.25,150.25 475,145 C 478.75,139.75 486.25,133 490,130 C 493.75,127 498.5,125.75 500,125 L 500 500 L 0 500 L 0,500"
          ></path>
        </g>
      </svg>
    </div>
    <div class="text-container">
      <div class="transform-container">
        <span class="topTitle"
          >변화를 열망하는 사람들이 모여, <br />
          역사에 남을만한 변화를 만들어냅니다</span
        >
        <div class="stat-text">
          <span class="stat-title">누적 가입자 수</span
          ><span class="stat-content">2,200만 +</span>
        </div>
        <div class="stat-text">
          <span class="stat-title">누적 투자금액</span
          ><span class="stat-content">1조 원 +</span>
        </div>
        <div class="stat-text">
          <span class="stat-title">전체 팀원 수</span
          ><span class="stat-content">1,500명 +</span>
        </div>
        <div class="stat-text">
          <span class="stat-title">출시 서비스 수</span
          ><span class="stat-content">50개 +</span>
        </div>
        <span class="stat-date">2022년 4월 기준</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes fill {
  100% {
    opacity: 0.3;
  }
}
@keyframes draw {
  100% {
    stroke-dashoffset: 0;
  }
}
.teamStat-container {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .bg-container {
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    .chart-fill {
      opacity: 0;
      transform: scale(1.01);
      fill: url(#gradient);
      animation: fill 2s linear 1s forwards;
    }
    .chart-line {
      fill: none;
      stroke: url(#gradient);
      stroke-dasharray: 2000;
      stroke-dashoffset: 2000;
      stroke-linecap: round;
      stroke-width: 2;
      transform: scale(1.01);
      animation: draw 2s linear 1s forwards;
    }
  }
  .text-container {
    max-width: 960px;
    .transform-container {
      animation: riseUp 1s;
      .topTitle {
        display: block;
        margin-bottom: 25px;
        font-size: 38px;
        font-style: normal;
        font-weight: bold;
        font-stretch: normal;
        line-height: 52px;
        color: #ffffff;
        letter-spacing: normal;
        word-break: keep-all;
      }
      .stat-text {
        display: inline-flex;
        flex-direction: column;
        width: 400px;
        margin-top: 51px;
        .stat-title {
          margin-bottom: 9px;
          font-size: 21px;
          font-style: normal;
          font-weight: normal;
          font-stretch: normal;
          line-height: 26.29px;
          color: #b0b8c1;
          letter-spacing: normal;
          word-break: keep-all;
        }
        .stat-content {
          font-size: 64px;
          font-style: normal;
          font-weight: bold;
          font-stretch: normal;
          line-height: 80.13px;
          color: #ffffff;
          letter-spacing: normal;
          word-break: keep-all;
        }
      }
      .stat-date {
        display: block;
        margin-top: 36.26px;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        font-stretch: normal;
        line-height: 20px;
        color: #6b7684;
        letter-spacing: normal;
        word-break: keep-all;
      }
    }
  }
}
</style>
