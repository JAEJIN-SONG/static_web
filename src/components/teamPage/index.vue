<script lang="ts" setup>
import TeamTop from "./teamTop.vue";
import TeamStat from "./teamStat.vue";
</script>

<template>
  <div class="teamPage-wrapper">
    <TeamTop />
    <TeamStat />
  </div>
</template>

<style lang="scss" scoped>
.teamPage-wrapper {
  width: 100%;
  background-color: #121417;
}
</style>
